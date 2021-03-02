const express = require ("express");
var path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.send("hello from express");
});

app.get("/bola", (req, res) => {
    res.sendFile(path.join(__dirname + "/bola.html"));
});

app.get("/bisnis", (req, res) => {
    res.send("jokowi ingatkan potensi krisis pangan");
});

app.get("/nasional", (req, res) => {
    res.send("nama kapolri besok");
});

app.get("/metro", (req, res) => {
    res.send("walkot bekasi botak");
});

app.get("/cantik", (req, res) => {
    res.send("kate middleton cantik uyy");
});

app.get("/tekno", (req, res) => {
    res.send("covid di indo naik");
});
app.get("/otomotif", (req, res) => {
    res.send("modifikasi mobil esemka");
});

app.get("/foto", (req, res) => {
    res.send("puan maharani matiin mic");
});

app.get("/Indeks", (req, res) => {
    res.send("macem2 dehh");
});

app.listen(4000, () => console.log("app running on port 4000"));

