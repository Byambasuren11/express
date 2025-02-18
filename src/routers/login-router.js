import { postLogin } from "../controller/login/create-login";

import express from "express"
export const loginRouter= express.Router()

loginRouter.post('/login', postLogin)