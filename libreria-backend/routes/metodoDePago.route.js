const express = require('express')
const metodoDePago = require('../models/metodosDePago.model')
    // router permite redireccionar la direcciones que vienen desde el front-end
const router = express.Router()

//Construccion del end-point para registro de usuarios

router.post('/registrar-metodoDePago', (req, res) => {
    let nuevoMetodoDePago = new metodoDePago({

        nombreTarjeta: req.body.nombreTarjeta,
        numeroTarjeta: req.body.numeroTarjeta,
        fechaExpiracion: req.body.fechaExpiracion,
        nombreUsuario: req.body.nombreUsuario,
        direccionUsuario: req.body.direccionUsuario,
        codigoCVV: req.body.codigoCVV,

    })
    nuevoMetodoDePago.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el metodo de pago',
                error
            })
        } else {
            res.json({
                msj: 'Metodo de pago registrado correctamente'
            })
        }
    })
})
router.get('/listar-metodoDePago', (req, res) => {
    metodoDePago.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar el metodo de pago',
                error
            })
        } else {
            res.json({
                msj: 'metodo de pago registrados correctamente',
                lista
            })
        }
    })
})
module.exports = router