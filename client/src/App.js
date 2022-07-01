import React from "react"
import Header from "./Components/Header"
import { ContextProvider } from "./context"
import AddTransaction from "./Components/AddTransaction"
import History from "./Components/History"

const App=()=>{
    return(
        <div className="container mx-auto mt-24 rounded justify-center align-center shadow-2xl shadow-gray w-1/2 bg-white">
            <ContextProvider>
            <Header></Header>
            <AddTransaction></AddTransaction>
            <History></History>
            </ContextProvider>
        </div>
    )
}

export default App;
