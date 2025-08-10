
const ResultadosIntreface = ({data})=>{

if(!data){
    return null
}



    return(
    <div className="result">
      <h2>{data.city}</h2>
      <p><strong>Temperatura:</strong> {data.temperature} °C</p>
      <p><strong>Clima:</strong> {data.description}</p>
      <p><strong>Hora:</strong> {data.date}</p>
    </div>
    )


}

export default ResultadosIntreface