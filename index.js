import express, { json, urlencoded } from 'express'
import mongoose from 'mongoose';
import Player from './models/players.js';
import password from './password/password.js'; //MONGODB PASSWORD which is hidden
import router from './routes/players.routers.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{res.send("Hello")})

await mongoose.connect(`mongodb+srv://snehalray10:${password}@backenddb.l08tkkl.mongodb.net/CRUD-NodeAPI-Football?retryWrites=true&w=majority&appName=BackendDB`)
.then(()=>{console.log("Connected to database")})
.catch(()=>{console.log("Connection to database FAILED")})


//SETTING UP THE ROUTES
app.use("/api/players",router);

app.get("/",(req,res)=>{
    res.send("Hello brev")
})


app.listen(8000,()=>{console.log("Server staring...")})