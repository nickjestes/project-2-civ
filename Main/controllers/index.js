const router = require('express').Router();
const apiRoutes = require('./api');
// const { User, Project } = require('../models');

router.get('/', (req, res) => {
    res.render("home", { logged_in: req.session.user != null });
})

router.get("/login", (req, res) => {
    (req.session.user) ? res.redirect('/secretclub') : res.render("login");
})

router.get("/signup", (req, res) => {
    (req.session.user) ? res.redirect('/secretclub') : res.render("signup");
})

router.get("/secretclub", (req, res) => {
    console.log("logged in", req.session);
    if (!req.session.user) {
        res.redirect("/login");
    }
    res.render("club", { logged_in: req.session.user != null, username: req.session.user.username });
})

// TODO
router.get("/readsession", (req, res) => {
    res.json(req.session)
})

//  TODO
router.get("/addcounter", (req, res) => {
    if (req.session.counter) {
        req.session.counter++
    } else {
        req.session.counter = 1
    }
    res.send("req.session updated")
})

router.use("/api", apiRoutes)

module.exports = router;

// TODO!
// // Wildcard route to direct users to a 404 page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/pages/404.html'))
// );