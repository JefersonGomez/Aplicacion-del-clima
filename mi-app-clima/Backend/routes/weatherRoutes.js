//para llamar al controlador echo
import GetWather from "../controller/watherController.js";
import express from "express";
//usamos una propieda de express para controlar rutas y peticiones
const Route= express.Router()
Route.get("/weather",GetWather)
export default Route
