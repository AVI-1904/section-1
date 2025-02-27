const mongoose = require('mongoose');

const url='mongodb+srv://singha92366:DEVIL@cluster0.4gmsg.mongodb.net/VOX-MARKET?retryWrites=true&w=majority&appName=Cluster0'

 mongoose.connect(url)
 .then((result) => {
    console.log('Database coonected successfully')
    
 }).catch((err) => {
    console.log(err)
    
 });

 module.exports=mongoose;