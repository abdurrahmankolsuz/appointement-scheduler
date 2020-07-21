const express = require('express');
require('dotenv').config()
const mongoose = require("mongoose");

const UserModel = require("./models/User");



const url = "mongodb://localhost:27017/Appointment_Scheduler";

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  } , (err) => {
    if(err){
        console.log("Not Connected");
      
        
    }else{
        console.log("Connected");
        console.log(process.env.CLIENT_URL);
    }
});

UserModel.find({})
 .then((data)=>{
    console.log(data);
  })
 .catch((err)=>{
   console.log(err);
 })
// you can pass query parameter to get particular record
UserModel.find({name:"Apo"})
 .then((doc)=>{
    console.log(doc);
 })
.catch((err)=>{
    console.log(err);
});

