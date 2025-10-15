const express=require('express');
const person=require('../models/person');
const router=express.Router();

//get
router.get('/',async(req,res)=>{
try{
    const data= await person.find();
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
    const update=new person(data);
    const response=await update.save();
    res.status(200).send(response);
    }
    catch(error){
        res.status(500).send("internal server error");
    }
});
//parametrized
router.get('/:role',async(req,res)=>{
    try{
    const work=req.params.role;
    if(work!='waiter'&&work!='chef'&&work!='manager'){

        res.status(404).send("not found");
    }
    const yes=await person.find({role:work});
    res.status(200).send(yes);
}
catch(error){
    res.status(500).send("internal server error");
}
});
//update operation

router.put('/:id',async(req,res)=>{
    try{
    const updata=req.body;
    const id=req.params.id;
    const data=await person.findByIdAndUpdate(id,updata,{new:true});
    if(!data){
        res.status(404).send("not found");
    }
    res.status(200).send(data);
    }
    catch(error){
        res.status(500).send("isr");
    }

    

});
//delete operation
router.delete('/:id',async (req,res)=>{
    try{
    const id=req.params.id;
    const data=await person.findByIdAndDelete(id);
    if(!data){
        res.status(404).send("not found");
    }

    res.status(200).send(data);
}
catch(error){
    res.status(500).send("isr");
}
});
module.exports=router;