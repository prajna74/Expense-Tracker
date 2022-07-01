import React, { useContext } from "react"
import { Context } from "../context";
const Header=()=>{
    const {transactions}=useContext(Context);
    var expense=0,income=0;
    transactions.map(tr=>{
        if(tr.typeOfTransaction==="income")
        income+=parseInt(tr.amt);
        else if(tr.typeOfTransaction==="expense")
        {
            expense+=parseInt(tr.amt);
        }
    })
    return(
   <div>
    <h1 className="text-center text-2xl font-bold">EXPENSE TRACKER</h1>
    <h1 className="text-center text-xl mt-8 font-bold">Available  balance: ₹{income-expense} </h1>
    <div className="mx-auto flex w-1/2 mt-12 ">
        <div className="w-1/2  bg-gray-200 justify-center align-center text-center ">
              <h1 className="text-xl text-red-900 font-bold text-center">Expense: ₹{expense} </h1>
        </div>
        <div className="w-1/2 ml-12 bg-gray-200 justify-center align-center text-center">
              <h1 className="text-xl  text-green-900 font-bold text-center">Income:  ₹{income}</h1>
        </div>
    </div>
   </div>
    )
}


export default Header;