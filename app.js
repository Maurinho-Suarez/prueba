const express = require('express');
const path = require('path');
const session = require('express-session');
const mainRoutes = require('./routes/formRoutes');

const app = express();
const router = express.Router();

//app.get('/', (req,res) => {
  //  res.send("Hola Maurinho!!");
//});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(mainRoutes);

//app.set('view engine', 'html');

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/formulario.html'));
});

app.listen(3000, (req,res) => {
    console.log("El servidor se esta escuchando desde el puerto 3000");
});