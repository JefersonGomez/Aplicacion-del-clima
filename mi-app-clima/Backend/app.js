import express from 'express'
import cors from 'cors'
import Route from './routes/weatherRoutes.js'
import ConectioDb from './db/db.js'
const app  = express()

app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Permitir cualquier origen (útil para desarrollo)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors())
//conxion de la data base
 ConectioDb()
app.use("/api",Route)

app.get('./api',(req,res)=>{
    res.json({messaje:"Servidor funcionando correctamente"})
})

const PORT = process.env.PORT||4000;
app.listen(PORT,()=>{
   console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
