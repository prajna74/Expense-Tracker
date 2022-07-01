const dotenv=require("dotenv");
dotenv.config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");
mongoose.connect(process.env.MONGO_URL);
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const routes=require("./routes/web");
routes(app);

app.listen(5000);
