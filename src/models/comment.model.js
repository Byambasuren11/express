import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: { type: String, require: true },
});
export const Users = mongoose.model("Users", usersSchema);
// await Users.deleteOne({ name: 'Henlo' });