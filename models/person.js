const mongoose=require('mongoose');
const { type } = require('os');

const personschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    role:{
        type:String,
        enum:["waiter","manager","chef"],
        
    },
    salary:{
        type:Number,
        required:true
    }
});
const person=mongoose.model("person",personschema);
module.exports=person;