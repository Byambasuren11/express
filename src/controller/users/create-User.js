import fs from "fs";

export const postUsers = (req, res) => {
  const { userName, password } = req.body;

  const rawUserData = fs.readFileSync("src/db/users.json");
  const user = JSON.parse(rawUserData);

  user.push({ userName, password });
  fs.writeFileSync("src/db/users.json", JSON.stringify(user));

  res.send(user);
};
