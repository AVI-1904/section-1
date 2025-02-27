const express = require('express');

const model=require('../models/sellerModel')

const seller=express.Router();


seller.get('/getall',(req,res)=>{
    res.send('find all seller deatils')
})


module.exports=seller;





