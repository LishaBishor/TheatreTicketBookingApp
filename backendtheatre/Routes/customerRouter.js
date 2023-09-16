const express=require('express');
const jwt=require('jsonwebtoken');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const customerModel=require('../Models/customerModel')
//...post...login api
router.post('/login',async(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    const customer=await customerModel.findOne({username:username});
    if(!customer){
    res.json({message:"user not found"})
    }
    try {
        if(customer.password==password){
            jwt.sign({email:username,id:customer._id},"mass",{expiresIn:'1d'},
            (error,token)=>{
                if(error){
                    res.json({message:"No Token generated"})
                 }else{
                    res.json({message:"Login Successfully",token:token,data:customer})
                 }
            })
        }
        else{
            res.json({message:"LoginFailed"})
        }
    } catch (error) {
        console.log("Error: ",error)
    }
  
})
//...post...customerSignup api
router.post('/customerSignup',async(req,res)=>{
    try{
        const customer=req.body;
        console.log(customer)
        username=req.body.username
        password=req.body.password
        const checkusername= (await customerModel.findOne({username:username})|| await customerModel.findOne({username:username}))
        if(username==="admin"||password ==="admin123"||checkusername){
            res.json({message:"Already exists"})
        }
        else{
        newCustomer=new customerModel(customer);
        console.log(newCustomer)
        const cdata=await newCustomer.save();
        res.json({message:"Registered Successfully"})
        }
    }
    catch(error){
        res.json({message:"unable to add"})
    }
})
module.exports=router;