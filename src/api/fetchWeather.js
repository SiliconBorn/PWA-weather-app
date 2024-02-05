import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "98455f19805b228cbc8c2c032fa79ab1";

export const fetchWeather = async(query)=>{

    try {
        const {data} = await axios.get(URL,{
            params:{
                q:query,
                units:"metric",
                APPID:API_KEY,
            }
        });

     return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}



