import express from "express";
import { conection } from "./Model/db_conection.js";
const app_e = express();
app_e.use(express.static('./View'));
app_e.use(express.static('./Model'));
app_e.use(express.static('./Controller'));
app_e.listen('3001', function(){
    console.log("Server is running on port 3001");
})

app_e.get('/', function(req, res){
    res.send("Hola Mundo, como estan")
})