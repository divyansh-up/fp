const express=require('express');
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
 
 
 
app.listen(3000,()=>{
    console.log("server is running at port 3000");
});

 
