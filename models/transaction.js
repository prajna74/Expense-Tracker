const mongoose=require("mongoose");
const transactionSchema=mongoose.Schema({
    title:{
        type:String,
    },
    amt:{
        type:Number,
    },
    typeOfTransaction:{
        type:String,
    }
});

module.exports=mongoose.model("Transaction",transactionSchema);