const express = require('express');
const router = express.Router();
const {body,validationResult} = require('express-validator');

const validator = [

    body('nombre')
        .isEmpty()
        .withMessage('El nombre no es válido'),
    body('colores')
        .isEmpty()
        .withMessage('El color no es válido'),
    body('email')
        .isEmpty()
        .isEmail()
        .normalizeEmail()
        .withMessage('El email no es válido'),
    body('edad')
        .isEmpty()
        .isInt()
        .withMessage('La edad ingresada no es válida')
    
];

router.post('/', validator,(req,res) => {
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        console.log(errores);
        const mensajes = errores.errors.map(error => error.msj);
        res.render('form', {errores: mensajes, datos:req.body});
    }
    res.render('form', {errores: [], datos: req.body});
});

router.get('/', (req,res) => {
    res.render('form', {errores: [], datos: req.body});
});

module.exports = router;