const express = require("express");

const app = express();

app.use("view engine", "ejs");

const profileRouter = require("./router/profile");
const articleRouter =require("./router/article");

app.get("/", (req,res)=> res.send("ini home"));

app.use ("/profile", profileRouter);

app.use("/article", articleRouter);

/**
 * article/all
 * article/find
 * article/search
 */

app.listen(4000, (err) => console.log("this app running on port 4000"));
