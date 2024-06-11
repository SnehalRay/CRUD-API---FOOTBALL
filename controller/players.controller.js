import express from 'express'
import Player from '../models/players.js';
import { Router } from 'express';

//creating player

export const createPlayer = async (req,res)=>{
    try{

        const player= await Player.create(req.body);
        res.status(200).json(player);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

//getting all players

export const allPlayers = async(req,res)=>{
    try{
        const player = await Player.find({})
        res.status(200).json(player)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }
}

//READING DATA FROM IDS

export const playerById = async(req,res)=>{
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
}

//UPDATING THE DATA

export const updatePlayer = async (req,res)=>{
    try{
        const { id } = req.params;
        const player = await Player.findByIdAndUpdate(id, req.body);
        
        if (!player){
            return res.status(404).json({message:"Player not found"})
        }

        const updatedPlayer = await Player.findById(id);


        res.status(200).json(updatedPlayer)

    }
    catch (error){
        res.status(500).json({message:error.message})
    }
}

//DELETING THE DATA

export const deletePlayer = async (req,res)=>{
    try{
        const { id } = req.params;
        const player = await Player.findByIdAndDelete(id);

        if (!player){
            return res.status(400).json({message:"Player not found"});
        }

        res.status(200).json({message:"Player successfully deleted",player:player.name})

    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

// export default { createPlayer,allPlayers, playerById, updatePlayer, deletePlayer}

