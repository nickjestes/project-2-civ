const router = require('express').Router();
const { info } = require('console');
const apiRoutes = require('./api');
// const path = require('path');

router.get('/',(req,res)=>{
    res.render("home")
})

router.get("/login",(req,res)=>{
    res.render("login")
})

router.get("/secretclub",(req,res)=>{
    if(!req.session.user){
        res.redirect("/login")
    }
    console.log("going to secret club");
    res.render("club",req.session.user)
})

router.get("/readsession",(req,res)=>{
    res.json(req.session)
})

router.get("/addcounter",(req,res)=>{
    if(req.session.counter){
        req.session.counter++
    } else {
        req.session.counter=1
    }
    res.send("req.session updated")
})

router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.json({msg:"logged out!"})
})

router.use("/api",apiRoutes)

module.exports = router;


// // GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // GET Route for feedback page
// app.get('/posts', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/pages/posts.html'))
// );

// // Wildcard route to direct users to a 404 page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/pages/404.html'))
// );