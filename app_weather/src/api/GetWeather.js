import axios from "axios";

export const GetWeather = async(city, setWeather) => {
  try {
    const result = await axios.get(`http://localhost:8081/city/weather?city=${city}`);
    console.log("la respuesta es" + result.data);
    setWeather(JSON.stringify(result.data))
    
  } catch (error) {
    console.error("Error al obtner el clima solicitado",error);
  }
}
