const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const { User, Tweet } = require('../../models');
const { Op } = require("sequelize");

// get all User tweet posts
// TODO
router.get("/", (req, res) => {
    console.log(req.session);

    User.findAll({
        include: [Tweet]
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "ERROR", err })
    })
})

// create new user
router.post("/", (req, res) => {
    console.log("create new user with req.body", req.body);
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(data => {
        // update session cookie so user gets logged in
        req.session.user = {
            id: data.id,
            username: data.username,
            email: data.email
        };
        res.status(201).json(data);
    }).catch(err => {
        res.status(500).json({ msg: "ERROR", err })
    });
});

// send POST request for /login
router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                // lets user login via email or username
                [Op.or]: [
                    { username: req.body.email },
                    { email: req.body.email }
                ]
            }
        });
        if (!userData) {
            res
                .status(400)
                .json({ msg: "invalid login credentials" });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ msg: "invalid login credentials" });
            return;
        }

        req.session.user = {
            id: userData.id,
            username: userData.username,
            email: userData.email
        };
        return res.status(200).json({ userData, msg: 'You are now logged in!' });
    
    } catch (err) {
        res.status(400).json(err);
    };
});

router.post('/logout', (req, res) => {
    console.log("inside backend logout"); // debug
    if (req.session.user) {
        console.log("session user", req.session.user); // debug
        req.session.destroy(() => {
            // code 204 is success and no response
            res.status(204).end();
        });
    } else {
        alert("uh oh. Logout function broke :(")
        res.status(404).end();
    }
});

module.exports = router;