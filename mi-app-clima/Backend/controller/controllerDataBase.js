import express from 'express'
import mongoose from 'mongoose'
import Clima from '../models/dataClimatee.js'



export const insertarDataClimate = async(data) =>{

    try{
        const nuevaData = new Clima(data)
        await nuevaData.save();
        console.log("Datos de clima guardados exitosamente");
    }catch(error){
        console.error("Error al guardar el clima en la base de datos:", error);
    }


}