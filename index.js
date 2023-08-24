import express from "express";
import {crud_cliente} from './Controller/crud_clientes.js';

const app_e = express();
app_e.use(express.urlencoded({extended:false}));
app_e.use(express.json());
app_e.use(express.static('./View/'));
app_e.use(express.static('./Model'));
app_e.use(express.static('./Controller'));
//Motor de Vistas
app_e.set('views', './View')
app_e.set('view engine', 'ejs')
app_e.listen('3001', function(){
    console.log("Server is running on port 3001");
})
app_e.get('/', crud_cliente.leer)
app_e.post('/crud_c', crud_cliente.crud)