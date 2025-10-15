const express=require('express');
const menu=require('../models/menu');
const router=express.Router();


//get
router.get('/',async(req,res)=>{
try{
    const data= await menu.find();
    res.status(200).send(data);
}

catch(error){
    res.status(500).send("internal server error");
}
});
//post
router.post('/',async(req,res)=>{

    try{
    const data=req.body;
    const update=new menu(data);
    const response=await update.save();
    res.status(200).send(response);
    }
    catch(error){
        res.status(500).send("internal server error");
    }
});
module.exports=router;