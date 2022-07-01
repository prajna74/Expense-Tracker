import React, { useContext, useState } from "react"
import { Context } from "../context";
const AddExpense=()=>{
   const {addTransactions}=useContext(Context);
    const [title,setTitle]=useState("");
    const[amt,setAmount]=useState(0);
    const [type,setType]=useState("");
    const onsubmit=((e)=>{
      e.preventDefault();
      e.target.reset();
      const newTransaction={
        title:title,
        amt:amt,
        typeOfTransaction:type
      }

      addTransactions(newTransaction);
    })
    return(
      <div className=" mt-12 justify-center align-center flex m-auto">
   <h1 className="text-xl font-bold mr-4">Add a task</h1><br></br>
  <form class="w-full max-w-sm" id="inputForm" onSubmit={onsubmit}>
<div className="md:flex md:items-center mb-6">
  <div className="md:w-2/3">
    <input className="bg-gray-200 appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500"  type="text" placeholder="Enter a task" onChange={(e)=>{setTitle(e.target.value)}} required/>
  </div>
</div>
<div className="md:flex md:items-center mb-6">
  <div className="md:w-2/3">
    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" id="amt" placeholder="Enter amount" onChange={(e)=>{setAmount(e.target.value)}} required/>
  </div>
</div>
<div className="md:flex md:items-center mb-6">
<div class="flex justify-center">
<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-gray-200 bg-clip-padding bg-no-repeat
      border border-solid 
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-gray-200 focus: focus:outline-none" aria-label="Default select example" onChange={(e=>setType(e.target.value))} required>
        <option selected>Select the type of transaction</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
  
    </select>
  </div>
</div>
</div>

</div>
<div className="md:flex md:items-center">
 
  <div className="md:w-2/3">
   <input type="submit"  className="mt-2 px-4 py-1 mb-4 text-white font-bold text-center bg-black"/>      
  </div>
</div>
</form>
</div>
  )
}


export default AddExpense;