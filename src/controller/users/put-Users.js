import { users } from "./get-Users.js";

export const putUsers=(req, res)=>{
    res.send(users);
}