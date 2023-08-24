import express from "express";
import { conection } from "./../Model/db_conection.js";

var crud_cliente = {};
crud_cliente.leer = (req, res) => {
    conection.query(
        'select id_clientes, nit, nombres, apellidos, direccion, telefono, date_format(fecha_nacimiento, "%d-%m-%Y") as fecha_nacimiento from db_empresa.clientes',
        (error, results) => {
            if (error) {
                throw error;
            } else {
                res.render("clientes/index", { resultado: results });
            }
        }
    );
};

crud_cliente.crud = (req, res) => {
    const btn_guardar = req.body.btn_guardar;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;
    const id_cliente = req.body.txt_id;
    const nit = req.body.txt_nit;
    const nombres = req.body.txt_nombres;
    const apellidos = req.body.txt_apellidos;
    const direccion = req.body.txt_direccion;
    const telefono = req.body.txt_telefono;
    const fecha_nacimiento = req.body.txt_fn;

    if (btn_guardar) {
        conection.query(
            "insert into db_empresa.clientes set ?",
            {
                nit: nit,
                nombres: nombres,
                apellidos: apellidos,
                direccion: direccion,
                telefono: telefono,
                fecha_nacimiento: fecha_nacimiento,
            },
            (error, response) => {
                if (error) {
                    throw error;
                } else {
                    res.redirect('/');
                }
            }
        );
    } else if (btn_actualizar) {
        conection.query(
            "update db_empresa.clientes set ? where id_clientes = ?",
            [
                {
                    nit: nit,
                    nombres: nombres,
                    apellidos: apellidos,
                    direccion: direccion,
                    telefono: telefono,
                    fecha_nacimiento: fecha_nacimiento,
                },
                    id_cliente
            ],
            (error, response) => {
                if (error) {
                    throw error;
                } else {
                    res.redirect('/');
                }
            }
        );

    } else if (btn_borrar) {
        conection.query(
            "delete from db_empresa.clientes where id_clientes = ?",
            [
                id_cliente
            ],
            (error, response) => {
                if (error) {
                    throw error;
                } else {
                    res.redirect('/');
                }
            }
        );

    }
};
export { crud_cliente };
