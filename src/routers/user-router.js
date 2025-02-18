import { postUsers } from '../controller/users/create-User.js';
import { getUsers } from '../controller/users/get-Users.js';
import { putUsers } from '../controller/users/put-Users.js';
import { deleteUsers } from '../controller/users/delete-Users.js';

import express from "express"
export const userRouter= express.Router()

    userRouter.get("/", getUsers);
    
    userRouter.post("/", postUsers);
    
    userRouter.put("/",  putUsers);
    
    userRouter.delete("/",deleteUsers);
