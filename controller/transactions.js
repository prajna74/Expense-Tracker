const Trans=require("./../models/transaction");
function transactions(){
    return{
        display:async (req,res)=>{
               const transaction=await Trans.find();
               res.status(200).json(
                transaction
               )
        },
        addTransaction:async (req,res)=>{
            //console.log(req.body);
            const newTransaction=new Trans({
                title:req.body.title,
                amt:req.body.amt,
                typeOfTransaction:req.body.typeOfTransaction
            });
            await newTransaction.save().then(result=>{
                res.status(201).json(newTransaction);
            }).catch(err=>{
                res.status(400).json(err);
            })
        },
        deleteTransaction:async (req,res)=>{
          const re= await Trans.findByIdAndDelete(req.params.id).then(result=>{
            res.status(200);
           }).catch(err=>{
            
            console.log(err);
           })
        }
    }
}

module.exports=transactions;