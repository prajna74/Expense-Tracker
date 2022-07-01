import React, { useState } from "react"
import axios from "axios";
export const Context=React.createContext();
export const    ContextProvider=(props=>{
    const [transactions,setTransactions]=useState([]);
    async function getTransactions(){
         const data=await axios.get("/api/v1/transaction");
         setTransactions(data.data)
    }
     async function deleteTransactions(id){
      //console.log(id);
      const res=await axios.delete(`/api/v1/transaction/${id}`);
      setTransactions(transactions.filter(tr=>{
           return tr._id!==id;
      }))
     }
     async function addTransactions(transaction){
      console.log(transaction)
         const res=await axios.post("/api/v1/transaction",transaction)
         setTransactions([...transactions,transaction]);
    }
    return (
          <Context.Provider value={{addTransactions,deleteTransactions,getTransactions,transactions,setTransactions}}>
            {props.children}
          </Context.Provider>
    )
});