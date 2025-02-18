import { users } from "./get-Users.js";
import fs from 'fs'

export const postUsers = (req, res) => {
  const { userName, password } = req.body;

   const rawUserData= fs.readFileSync('src/db/users.json');
   const users=JSON.parse(rawUserData);

   users.push({userName, password})
   fs.writeFileSync('src/db/users.json', JSON.stringify(users));

 
  res.send(users)
};
