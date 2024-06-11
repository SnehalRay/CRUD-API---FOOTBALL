import express from 'express';
import { createPlayer, allPlayers, playerById, updatePlayer, deletePlayer } from '../controller/players.controller.js';


const router = express.Router();



//CREATE PLAYER
router.post('/',createPlayer);


//GETTING ALL PLAYERS
router.get('/',allPlayers);

//getting player by id
router.get("/:id",playerById)

//updatingPlayer

router.put("/:id",updatePlayer);

//deleting Player

router.delete("/:id",deletePlayer);

export default router;