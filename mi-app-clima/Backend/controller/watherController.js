//axios se usa para hacer peticiones htpp
import axios from "axios";
//esto es para obtener las variables del arcvhivo .env como lo es mi api key
import dotenv from "dotenv";
import { insertarDataClimate } from "./controllerDataBase.js"

dotenv.config(); 
//creaciond e funcion
//es una funcion asincrona porque vamos a usar aweit para esperar la respuesta de api
const GetWather = async(req,res)=>{
    //optenermos la ciudad que puso el front como parametro en la url 
    const city = req.query.city
    //se verifica que la ciudad venga 
    if(!city){
        return res.status(400).json({messaje:"falta el nombre de la ciudad"})
    }
    try{
        //se hace un get a la api
        //se usa awit para esperar la respuesta de la api y no seguir aun 
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
        )
        //obtenermos los datos importantes de la respuesta
        const dataWather={
            city:response.data.name,
             temperature: response.data.main.temp,
            description:response.data.weather[0].description,
            icon:response.data.weather[0].icon,
            date:new Date().toLocaleDateString()
        }
        // re guarda en un objeto json
        insertarDataClimate(dataWather)
        res.json(dataWather)
    }catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el clima" });
    }


}
export default GetWather
