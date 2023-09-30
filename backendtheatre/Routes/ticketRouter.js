const express=require('express');
const jwt=require('jsonwebtoken');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const movieModel=require('../Models/movieModel')
const ticketModel=require('../Models/ticketmodel')

//..to update.../updateMoviedetails.
router.put('/ticketbook/:timing/:screen/:token',async(req,res)=>{
    try {
       let timing=req.params.timing;
       let token=req.params.token;
       let screen=req.params.screen;
      let updateddata=[]
       updateddata=req.body.screen1
       let movietkt= await ticketModel.find({screen:screen,timing:timing})
       console.log(movietkt[bookedseats])
       updateddata.forEach(element=>{
         if (element in movietkt ){
            console.log("already exist")
         }
       })
      
      jwt.verify(token,"mass",(error,decoded)=>{
        if (decoded && decoded.email) {
            //  movieModel.findOne(_id:id)
            updateddata.forEach(element => {
                const gg=ticketModel.findOneAndUpdate({screen:screen,timing:timing},
                    {$push:{
                        bookedseats:element
                    }
                }).exec();
            }); 
           
            console.log('Booking confirmed')
            res.json({message:"Booking confirmed"})  
        } else {
            res.json({message:"unauthorised user"})
        }
      })
     
       } catch (error) {
        res.json("Unable to Update "+error); 
   }
})

module.exports=router;
