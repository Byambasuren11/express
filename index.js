const express = require("express");
const app = express();
const port = 4000;
app.use(express.json());
var i = [
  {
    name: "Byambasuren",
    firstName: "Bold",
    userName:"Hello",
    password:"12345678"
  },
];
app.get("/", (req, res) => {
  res.send("enter userName and firstNsame");
});

app.post("/", (req, res) => {
  const { name, firstName } = req.body;
  i.push({
    name,
    firstName,
  });
  res.send("post");
});

app.put("/", (req, res) => {
  i[0].name = "hah";

  res.send("put");
});

app.delete("/", (req, res) => {
  const filtered = i?.filter((element, index) => {
    return element.firstName == "Bold";
  });

  i = filtered;

  res.send(filtered);
});

// login => (username, password) => find()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
