const express = require('express')
const sociosComerciales = require('../models/sociosComerciales.model')
    // router permite redireccionar la direcciones que vienen desde el front-end
const router = express.Router()

//Construccion del end-point para registro de usuarios

router.post('/registrar-sociosComerciales', (req, res) => {
    let nuevoSocioComercial = new socioComercial({


        nombre: req.body.nombre,
        id: req.body.id,
        ubicacion: req.body.ubicacion,
        telefono: req.body.telefono,


    })
    nuevoSocioComercial.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el socio comercial',
                error
            })
        } else {
            res.json({
                msj: 'Socio comercial registrado correctamente'
            })
        }
    })
})
router.get('/listar-sociosComerciales', (req, res) => {
    socioComercial.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar el socio comercial',
                error
            })
        } else {
            res.json({
                msj: 'Socio comercial registrado correctamente',
                lista
            })
        }
    })
})
module.exports = router