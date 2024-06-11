import express, { json } from 'express'
import mongoose from 'mongoose';
import Player from './models/players.js';

const app = express();

app.use(express.json())

app.get("/",(req,res)=>{res.send("Hello")})

await mongoose.connect("mongodb+srv://snehalray10:Snehal2005@backenddb.l08tkkl.mongodb.net/CRUD-NodeAPI-Football?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{console.log("Connected to database")})
.catch(()=>{console.log("Connection to database FAILED")})


//ADDING DATA
app.post("/api/players", async (req,res)=>{
    try{

        const player= await Player.create(req.body);
        res.status(200).json(player);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


app.listen(8000,()=>{console.log("Server staring...")})