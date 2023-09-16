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
app.use('/api',custapi);
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})
