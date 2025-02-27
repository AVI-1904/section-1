const express = require('express');
const usermodel=require('./routers/userRouter')



const app=express();

const port = 3000;

app.use('/user',usermodel)



app.get('/getall',(req,res)=>{
    res.send('find all data of user');
})

app.listen(port,()=>{
    console.log('server run on port 3000')

})
   