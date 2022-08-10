const express = require('express');
const router = express.Router();
const { User, Tweet } = require('../../models');

router.get("/",(req,res)=>{
    Tweet.findAll({
        include:[User]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

router.post("/",(req,res)=>{
    if(!req.session.user){
        return res.status(403).json({msg:"login first to post a blog!"})
    }
    console.log("in post tweet, user is",req.session.user)
    console.log("in post tweet, body is",req.body)
    Tweet.create({
        // title: req.body.title,
        // content: req.body.content,
        ...req.body,
        userId: req.session.user.id
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})


router.delete("/:id", (req,res)=>{
    if(!req.session.user){
        return res.status(403).json({ msg: "login first to post!" })
    }
    Tweet.findByPk(req.params.id).then(foundTweet => {
        if(!foundTweet){
            return res.status(404).json({ msg: "no such blog post" })
        }
        if(foundTweet.userId!==req.session.user.id){
            return res.status(403).json({ msg: "you didnt write this blog post, you don't have permission to delete this post" })
        }
        Tweet.destroy({
            where:{
                id:req.params.id
            }
        }).then(data=>{
            res.json(data);
        }).catch(err=>{
            res.status(500).json({msg:"ERROR",err});
        })
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    });
   
})


module.exports = router;