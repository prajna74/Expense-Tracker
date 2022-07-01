import React,{useContext, useEffect} from "react";
import { Context } from "../context";
import Transaction  from "./Transaction";
const History=()=>{
    const {transactions,getTransactions}=useContext(Context);
    useEffect(()=>{
        getTransactions();
    },[transactions]);
    return(
        <div>
            <h1 className="text-xl ml-12 font-bold">{transactions.length>0?"History":""}</h1>
        <div className="text-center justify-center mx-auto align-center ml-12 mt-4">
            
             {transactions.map((t)=>{
                return(
                     <Transaction key={t.id} t={t}></Transaction>
                )
             })}
        </div>
        </div>
    )
}


export default History;