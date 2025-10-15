const mongoose=require('mongoose');
 
const mongouri="mongodb://localhost:27017/apna-boss";

mongoose.connect(mongouri);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("db is connected");
});
db.on('disconnected',()=>{
    console.log("db is disconnected");
});
db.on("error",()=>{
    console.log("error to connect");
});
module.exports=db;