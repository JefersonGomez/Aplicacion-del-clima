import express from "express";
import mongoose from "mongoose";
//url de mi base da datos
const URL = "mongodb://127.0.0.1:27017/MiDataAppClima";

const ConectioDb =()=>{
    mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("✅ Conexión a la BD exitosa"))
    .catch((error) => console.error("❌ Error al conectar a la BD:", error));
}
export default ConectioDb