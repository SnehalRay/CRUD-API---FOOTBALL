import express from 'express'
import mongoose from 'mongoose';

const app = express();

app.get("/",(req,res)=>{res.send("Hello")})

await mongoose.connect("mongodb+srv://snehalray10:Snehal2005@backenddb.l08tkkl.mongodb.net/CRUD-NodeAPI-Football?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{console.log("Connected to database")})
.catch(()=>{console.log("Connection to database FAILED")})


app.listen(8000,()=>{console.log("Server staring...")})