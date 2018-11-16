const express = require('express');
const { verificarToken, verificarAdmin_Role } = require('../middleware/autenticacion');
const _ = require('underscore');
let app = express();

let Categoria = require('../models/categoria');

/**
 * Mostrar todas las categorias
 */
app.get('/categoria', (req, res) => {
    return res.json({
        categoria
    });

});
/**
 * Mostrar una categoria por ID
 */
app.get('/categoria/:id', (req, res) => {
    //Categoria.findById(....)

    return res.json({
        categoria
    });
});
/**
 * Crear nueva categoria
 */
app.post('/categoria', verificarToken, (req, res) => {
    let body = req.body;
    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.usuario._id
    });
    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });
    //regresa la nueva categoria
    //req.usuario._id
});
/**
 * Mostrar todas las categorias
 */
app.put('/categoria/:id', (req, res) => {
    //descripcion de la categoria
    let id = req.params.id;
    let body = _.pick(req.body, [nombre]);
    Categoria.findByIdAndUpdate(id, body, { new: true }, (err, CategoriaDB) => {
        if (err) {
            res.status(500).json({
                ok: false,
                err
            });
        }
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });
});
/**
 * Mostrar todas las categorias
 */
app.delete('/categoria/:id', [verificarToken, verificarAdmin_Role], (req, res) => {
    let id = req.params.id;
    let cambiarEstado = {
        estado: false
    };
    Categoria.findByIdAndRemove(id, cambiarEstado, { new: true }, (err, CategoriaBorrada) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        if (CategoriaBorrada === null) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'Categoria no encontrada'
                }
            });
        }
        res.json({
            ok: true,
            categoria: CategoriaBorrada
        })
    });
    //solo un adminsitrador puede borrar categorias ADMIN_ROLE
    //Categoria.findByAndRemove
});

module.exports = app;