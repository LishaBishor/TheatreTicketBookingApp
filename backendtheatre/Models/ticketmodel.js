const mongoose=require('mongoose');
const ticketSchema=mongoose.Schema({
screen:String,
timing:String,
bookedseats:[String]

});

const ticketData=mongoose.model('ticketdtail',ticketSchema);
module.exports=ticketData;