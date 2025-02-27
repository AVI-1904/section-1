const express = require('express');

const model=require('../models/productModel')

const product=express.Router();


product.get('/getall',(req,res)=>{
    res.send('find all product deatils')
})


module.exports=product;