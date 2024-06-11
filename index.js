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

//GETTING DATA
app.get("/api/players",async(req,res)=>{
    try{
        const player = await Player.find({})
        res.status(200).json(player)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }
})


//READING DATA FROM IDS

app.get("/api/players/:id",async(req,res)=>{
    try{
        const { id } = req.params;
        const player = await Player.findById(id);
        if(!player){
            res.status(500).json({messager: "Player not found" });
        }
        res.status(200).json(player) 

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//UPDATING THE DATA

app.put("/api/players/:id",async (req,res)=>{
    try{
        const { id } = req.params;
        const player = await Player.findByIdAndUpdate(id, req.body);
        
        if (!player){
            res.status(404).json({message:"Product not found"})
        }

        const updatedPlayer = await Player.findById(id);


        res.status(200).json(updatedPlayer)

    }
    catch (error){
        res.status(500).json({message:error.message})
    }
})

app.listen(8000,()=>{console.log("Server staring...")})