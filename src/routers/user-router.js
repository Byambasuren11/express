import { postUsers } from '../controller/users/create-User.js';
import { getUsers } from '../controller/users/get-Users.js';

import express from "express"
export const userRouter= express.Router()

    userRouter.get("/", getUsers);
    
    userRouter.post("/", postUsers);
    //mongodb+srv://Byambasuren11:80664525Bn$@cluster0.veh63.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
