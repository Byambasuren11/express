import { postLogin } from "../controller/login/create-login.js";

import express from "express"
import { getLogin } from "../controller/login/get-Login.js";
export const loginRouter= express.Router()

loginRouter.post('/', postLogin);
loginRouter.get('/', getLogin)