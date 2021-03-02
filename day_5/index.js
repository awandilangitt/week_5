const express = require ('express');
const app = express();

//Routing users
//create users
app.post("*/users", (req, res) => res.send("routing untuk create users"));

app.get ("*/users", (req, res) => res.send("routing untuk read users"));

app.put ("*/users", (req, res) => res.send("routing untuk update users"));

app.delete ("*/users", (req, res) => res.send("routing untuk delete users"));

//Routing tasks
//create tasks
app.post("*/tasks", (req, res) => res.send("routing untuk create tasks"));

app.get ("*/tasks", (req, res) => res.send("routing untuk read tasks"));

app.put ("*/tasks", (req, res) => res.send("routing untuk update tasks"));

app.delete ("*/tasks", (req, res) => res.send("routing untuk delete tasks"));


app.listen(4000, () => console.log('You are running on ports 4000!'))