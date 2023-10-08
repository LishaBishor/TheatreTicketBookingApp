const express=require('express');
const mongoose = require('mongoose');
const morgan=require('morgan');
const cors=require('cors');
const app=new express();
require('dotenv').config();
app.use(morgan('dev'));
require("./db/dbconnection")
app.use(cors());
const custapi=require('./Routes/customerRouter');
const logapi=require('./Routes/loginRouter');
const movieapi=require('./Routes/movieRouter');
const ticketapi=require('./Routes/ticketRouter');
const emailapi=require('./Routes/emailRouter')
app.use('/api',custapi);
app.use('/api',logapi);
app.use('/api',movieapi);
app.use('/api',ticketapi);
app.use('/api',emailapi)
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})
