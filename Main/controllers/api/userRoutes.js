const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const { User, Tweet } = require('../../models');
const { Op } = require("sequelize");

// get all User
router.get("/", (req, res) => {
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
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "ERROR", err })
    })
})

// send POST request for /login
router.post("/login", (req, res) => {
    console.log('hit login', req.body);
    User.findOne({
        where: {
            [Op.or]: [
                { username: req.body.email },
                { email: req.body.email } 
            ]
        }
    }).then(foundUser => {
        console.log({foundUser});
        // findOne returns an valid email object, if none is found then foundUser will be NULL
        if (!foundUser) return res.status(401).json({ msg: "invalid login credentials" });

        // passes first email check, then compare the hashed passwords.
        if (!bcrypt.compareSync(req.body.password, foundUser.password))
            return res.status(401).json({ msg: "invalid login credentials" });

        // passes second check, then create session of user and send to response
        req.session.user = {
            id: foundUser.id,
            username: foundUser.username,
            email: foundUser.email
        }
        return res.status(200).json(foundUser)
    }).catch(err => {

        console.error(err);
        res.status(500).json({ msg: "ERROR", err })
    })
})

module.exports = router;