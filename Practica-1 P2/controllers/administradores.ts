// //impotamos la varaible definida de la carpeta de models y tambien la variable de la carpeta de interfaces

import{Inversionista} from '../models'
import {Iinversionstas} from '../interfaces'
import{Request,Response}from 'express'

//Definir funciones
const Obtener_inversionistas=async(req:Request,res:Response)=>{
    //mas liviano await Producto.find().lean()
    const {limite='10',desde='0'}=req.query
    const query={estado:true};
    const [total, inversionistas]:[Number,Iinversionstas[]]=await  Promise.all([
    Inversionista.countDocuments(query),
    Inversionista.find(query) 
    .skip(Number(desde))
    .limit(Number(limite))
    ])
    
    res.json({
        total,
        inversionistas
})
}
const Obtener_inversionista = async(req:Request,res:Response)=>{
    const{id}=req.params
    const producto:Iinversionstas|null=await Inversionista.findById(id);
    //const producto:IProducto=(await Producto.findById(id))!;
    res.json(producto)
}
//Funcion de crear algun producto y se realizo una condicion que no permita guardar un producto existente
const Crear_inversionista = async(req:Request,res:Response)=>{
    const{id_inversionista,...body}=req.body as Iinversionstas;
    const existeProducto=await Inversionista.findOne({nombre:body.id_conceptoInversionista})
    if(existeProducto){
        return res.status(400).json({
            message:`El producto ${body.id_conceptoInversionista} ya existe!`
        });
    }
    const producto=new Inversionista(body);
    const productoNuevo=await producto.save();
    return res.status(200).json(productoNuevo);
}
const Delete_inversionista = async(req:Request,res:Response)=>{
    const{id_inversionista,...body}=req.body as Iinversionstas;
    const existeProducto=await Inversionista.deleteOne({id:body.id_conceptoInversionista})
    if(existeProducto){
        return res.status(400).json({
            message:`El producto ${body.id_conceptoInversionista} ya existe!`
        });
    }
    const producto=new Inversionista(body);
    const productoNuevo=await producto.save();
    return res.status(200).json(productoNuevo);
}
const Put_inversionista = async(req:Request,res:Response)=>{
    const{id_inversionista,...body}=req.body as Iinversionstas;
    const existeProducto=await Inversionista.findOne({id:body.id_conceptoInversionista})
    const producto=new Inversionista(body);
    const productoNuevo=await producto.save();
    return res.status(200).json(productoNuevo);
}
//Se exporta las funciones que se creó
export{
    Obtener_inversionista,
    Obtener_inversionistas,
    Crear_inversionista,
    Delete_inversionista,
    Put_inversionista
}