
import './App.css'
import { useState } from 'react'
import WaterForm  from './waterForm'
import ResultadosIntreface from'./resultadosIntreface'
function App() {

const [apiData,setApiData] = useState(null)

const cosumoDeApi = async (city) =>{
try{
  const response = await fetch(`http://localhost:4000/api/weather?city=${encodeURIComponent(city)}`);
  const result = await response.json();

   if (!response.ok) {
        throw new Error("Error al conectar con el servidor");
      }

 if (!result.city) {
  throw new Error("Ciudad no encontrada");
}
  const date = new Date().toLocaleString();

  setApiData({
    city:result.name,
    temperature:result.temperature,
    description:result.description,
    date
  })
}catch (error) {
      alert(error.message);
    }


}

  return (
    <div className="container">
      <h1>🌤️ Buscador de Clima</h1>
      <WaterForm onSearch={cosumoDeApi} />
      <ResultadosIntreface data={apiData} />
    </div>
    
  );
}


export default App
