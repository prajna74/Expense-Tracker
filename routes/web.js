const transactions=require("./../controller/transactions");
function allRoutes(app)
{
    app.get("/api/v1/transaction",transactions().display);
    app.post("/api/v1/transaction",transactions().addTransaction);
    app.delete("/api/v1/transaction/:id",transactions().deleteTransaction)
}


module.exports=allRoutes;