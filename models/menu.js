const mongoose=require('mongoose');
const menuschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{

        type:String,
        enum:['sweet','spicy','sour']
    },
    indegrients:{
        type:[String],
        default:[]
    },
    sales:
    {
        type:Number,
        default:0
    }
});
const menu=mongoose.model('menu',menuschema);

module.exports=menu;