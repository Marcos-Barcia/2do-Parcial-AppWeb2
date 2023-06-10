import {Router} from 'express'
import{check}from 'express-validator'
import{Administrador} from '../controllers'
import funciones from '../middlewares'


const {validarCampo}=funciones

const {Obtener_inversionista,Obtener_inversionistas,Crear_inversionista, Delete_inversionista, Put_inversionista} = Administrador

const router=Router()

//Establacemos las rutas para cada funcion que se realizo en la carpeta de controllers/products.ts
router.get('/',Obtener_inversionistas)
router.get('/:id', check('id','Debe ser un id de mongo').isMongoId(),validarCampo,Obtener_inversionista)
router.post('/',check('nombre','Es obligatorio').not().isEmpty(),validarCampo,Crear_inversionista)
router.delete('/delete/:id', check('id','Debe ser un id de mongo').isMongoId(),validarCampo,Delete_inversionista)
router.put('/put/:id', check('id','Debe ser un id de mongo').isMongoId(),validarCampo,Put_inversionista)



//Exportamos la variable router
export {router}
