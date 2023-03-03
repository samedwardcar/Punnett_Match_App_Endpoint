const user = require ("./user.js");
const punnett_square = require ("./punnett_square.js");
const express = require("express");

const { response } = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.post("/api/signup", (req, res) => {
    const user_info = req.body
    const response = user.signup(user_info)
    res.json(response);
});

app.post("/api/signin", (req, res) => {
        const username = req.body.username
        const password = req.body.password
        const response = user.signin(username, password)
        res.json(response);
      });

app.post("/api/store", (req, res) => {
        const user_inputs = req.body
        console.log(JSON.stringify(user_inputs))
        const result = punnett_square.store(user_inputs)
        res.json(result);
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });