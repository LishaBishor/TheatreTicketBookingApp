const mongoose=require('mongoose');
const movieSchema=mongoose.Schema({
moviename:String,
movieimage:String,
category:String,
Languages:String,
poster:String,
description:String,
castdetails:
    
        [{actorname: String,actorimage: String }]  
    
,
moviereviews:[String]
});

const movieData=mongoose.model('moviedetail',movieSchema);
module.exports=movieData;