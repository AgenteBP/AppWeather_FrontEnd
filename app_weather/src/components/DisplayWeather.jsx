import React from 'react'

export const DisplayWeather = ({weather}) => {
  try {//verifico si esta vacio el clima
    if(!weather){
      return <div> No hay informacion del clima</div>
    }

    const weatherData = JSON.parse(weather);
    const temp = weatherData.main.temp;

    return(
      <>
        <div className='weather'>
          <table className='table table-striped table-bordered'>
            <thead className='thread-dark'>
              <tr>
                <th>Ciudad</th>
                <th>Temperatura (°C)</th>
                <th>Descripción</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{weatherData.name}</td>
                <td>{temp}</td>
                <td>{weatherData.weather[0].description}</td>
              </tr>
            </tbody>

          </table>
        </div>
      </>
    )
    
  } catch (error) {
    console.log("Error en la muestra del clima "+ error);
  }
}
