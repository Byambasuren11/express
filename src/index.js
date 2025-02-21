import express from "express";
// import { userRouter } from "./routers/user-router.js";
// import { loginRouter } from "./routers/login-router.js";
import mongoose from "mongoose";
import { Users } from "./models/comment.model.js";
const uri =
  "mongodb+srv://Byambasuren11:80664525Bn$@cluster0.veh63.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";
const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("succ");
  } catch (error) {
    console.log(error);
  }
};
connectDb();
const app = express();
const port = 4000;
app.use(express.json());

app.get("/user", async (req, res) => {
  console.log(res)
  try {
    const userData = await Users.find({});
    console.log(userData);
    res.send(userData);
  } catch (error) {
    res.status(400).send("Current password does not match");
  }
});
  
app.delete("/user", async (req, res)=>{
  try{
    const deleted=await Users.deleteOne({name:"henlo00"})
    res.send(deleted)
  }
  catch{
    res.status(400).send("Current password does not match");
  }
})

app.post("/user", async (req, res) => {
  const { name } = req.body;
  try {
    const newUser = await Users.create({
      name: name,
    });
    res.send(newUser);
  } catch (error) {
    res.status(400).send("Current password does not match");
  }
});

// app.use("/users", userRouter);
// app.use("/users/login", loginRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
