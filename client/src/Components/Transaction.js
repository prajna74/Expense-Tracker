import React, { useContext } from "react";
import {FaTimes} from "react-icons/fa"
import { Context } from "../context";
const Transaction=({t})=>{
          const {deleteTransactions}=useContext(Context);
         const  ondelete=(id=>{
           
             deleteTransactions(id);
          });
           return(
            <div className="flex justify-between w-3/4 p-4 border-2 border-black-200 justify-center m-2 align-center block" >
            <div>
             <h1 className="text-xl font-bold">{t.title}</h1>
            </div>
            <div>
                <h1 className="font-bold"><span>{t.typeOfTransaction==="income"?"+":"-"}</span> {t.amt}</h1>
            </div>
            <div>
               <button onClick={()=>ondelete(t._id)}><FaTimes className="icon"></FaTimes></button>
            </div>
     </div>
           )
}


export default Transaction;