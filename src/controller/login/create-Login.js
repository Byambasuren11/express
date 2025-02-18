import { users } from "../users/get-Users";

export const postLogin=()=>{
  const checkedUser = users.filter((user)=>user.userName===userName && user.password===password);
  console.log(checkedUser);
  
  if(checkedUser.length>0){
    res.send("sucsess");

  } else{
    res.send("");

  }
}