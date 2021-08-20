const express = require("express");

const app = express();

const router = express.Router();

router.get("/home", (req, res) => {
    res.send("helloworls, this is the home router");
});

router.get("/login", (req, res) => {
    res.send("helloworld, this is the login router");
});

router.get("/logout", (req, res) => {
    res.send("helloworld, this is the logout router");
});

app.use("/", router);

app.listen(8080);
console.log("server is running");

