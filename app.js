const express = require('express');
const path = require('path');

const app = express();

//app.get('/', (req,res) => {
  //  res.send("Hola Maurinho!!");
//});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.listen(3000, (req,res) => {
    console.log("El servidor se esta escuchando desde el puerto 3000");
});