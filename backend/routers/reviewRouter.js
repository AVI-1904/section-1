const express = require('express');

const model=require('../models/reviewModel')

const review=express.Router();


review.get('/getall',(req,res)=>{
    res.send('find all review  deatils')
})


module.exports=review