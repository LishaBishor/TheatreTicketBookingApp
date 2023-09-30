const express=require('express');
const jwt=require('jsonwebtoken');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const movieModel=require('../Models/movieModel')
const ticketModel=require('../Models/ticketmodel')

//...post...addmovie api
router.post("/addmovie", async (req, res) => {
    try {
        console.log("hello")
        const movie = req.body;
       let screen=req.body.screen;
        let ticket={screen1:[{moviename:req.body.moviename,timings:req.body.timings
                     }]}
        
        jwt.verify(req.body.token,"mass",(error,decoded)=>{
            if (decoded && decoded.email) {
                movieModel(movie).save();
                ticketModel(ticket).save();
                
        res.json({message:"Movie details added sucessfully!!"})  
            } else {
                res.status(200).json({ message: "unauthorised user" })
            }
        })
        
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: `Cannot add movie details `, error:err  });
    }
});

//api for getting all the moviedetails
router.get("/viewmovies/:token", async (req, res) => {
    const data = await movieModel.find({}, {responses:0});
    
    try {
        jwt.verify(req.params.token,"mass",(error,decoded)=>{
            if(decoded && decoded.email){

                res.json(data)
            }
            else{
                res.status(400).json({message:"Unauthorised user"},decoded,decoded.email)
            }
        })
        
    } catch (err) {
        res.status(404).json({ mesaage: `Cannot get Jobs ${err}` });
    }
});

//api for finding one particular MovieDetails
router.get('/findthemovie/:id',async(req,res)=>{
    let id=req.params.id
    let movie=await movieModel.findOne({_id:id})
    try{
    if(movie){
        res.json(movie)
   
    }
    else{
        res.status(400).json({message:"No details availablr for that movie"}) 
    }
}catch(error){
    res.status(400).json({message:"some error occured",error})
    console.log(error) }
   
});

//..to update.../updateMoviedetails.
router.put('/upreview/:id/:token',async(req,res)=>{
    try {
       let id=req.params.id;
       let token=req.params.token;
      let updateddata=req.body.userfeedback
      
      jwt.verify(token,"mass",(error,decoded)=>{
        if (decoded && decoded.email) {
            //  movieModel.findOne(_id:id)
            const feedback=movieModel.findByIdAndUpdate(id,{
                $push:{
                   userfeedback:updateddata 
                }
            }).exec();
            console.log('updated')
            res.json({message:"updated"})  
        } else {
            res.json({message:"unauthorised user"})
        }
      })
     
       } catch (error) {
        res.json("Unable to Update "+error); 
   }
})


module.exports=router;