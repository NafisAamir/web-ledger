const jwt=require("jsonwebtoken");
const {Router}=require('express');
const {UserModel}=require("../models/User.model");
const userController=Router();
const bcrypt=require("bcrypt");
require("dotenv").config()
userController.post("/signup",(req,res)=>{
    const {email,password,age}=req.body;
    bcrypt.hash(password,5,async function (err,hash){
        if(err){
            res.send("Something went wrong ,Plz try again later")
        }
        const user=new UserModel({
            email,
            password:hash,
            age
        })
        await user.save()
        res.json({msg:"Signup Success"})
    })
    userController.post("/login",async(req,res)=>{
        const {email,password}=req.body;
        const user=await UserModel.findOne({email})
        const hash=user.password
        bcrypt.compare(password,hash,function(err,result){
            if(err){
                res.send("Something went wrong,plz try again later");
            }
            if(result){
                const token=jwt.sign({userId:user._id},process.env.JWT_SECRET);
                    res.json({message:"Login Success",token})
                }else{
                    res.send("Invalid credentials,Signup if you havenot")
                }
            }
        )
    })
})