import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputCity } from './components/InputCity'
import { GetWeather } from './api/GetWeather'
import { BottonConsult } from './components/BottonConsult'
import { DisplayWeather } from './components/DisplayWeather'

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const handlerGetWeather = () => {
    GetWeather(city,setWeather);
  }

  return (
    <>
      <div className= 'container'>
        <h1 className='mt-3'>Busca el clima actual</h1>
        <InputCity city={city} setCity={setCity} />
        <BottonConsult getWeather={handlerGetWeather} />
        <DisplayWeather weather={weather} />
      </div>
    </>
  )
}

export default App
