import { useState } from "react"
const WaterForm = ({onSearch})=>{

   const [city, setCity] = useState("");
  const [error, setError] = useState("");
  
   const handleSubmit =(e)=>{
     e.preventDefault();

    if(!city.trim()){
        setError("Porfavor,ingrese una ciudad.")
    }
    setError("")
    onSearch(city)

   }

return(
  <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Escribe el nombre de la ciudad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="form-input"
        />
      </div>
      <button type="submit" className="form-button">
        Buscar
      </button>
      {error && <p className="error">{error}</p>}
    </form>

)

}
export default WaterForm;