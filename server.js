const express=require('express');
require('dotenv').config();
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const db=require('./db');
const menu=require('./models/menu');
const person=require('./models/person');
const personroutes=require('./routers/personroutes');
const menuroutes=require('./routers/menuroutes');
app.use('/person',personroutes);
app.use('/menu',menuroutes);
 
 
 
app.listen(process.env.PORT,()=>{
    console.log("server is running at port 3000");
});

 
