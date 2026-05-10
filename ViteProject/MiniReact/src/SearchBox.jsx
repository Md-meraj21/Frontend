import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateWeather }) {

    // const API_URL = "http://api.openweathermap.org/geo/1.0/direct";   //thIS IS ALSO CORDINATES Map ke lia
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "dec9b02da04427e2cf61f4de19b28098";

    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    let GetWeatherInfo = async () => {
       try {
         let Response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await Response.json();
        
        let result = {
            city: city,
            temp: (jsonResponse.main.temp - 273.15).toFixed(2),
            tempMin: (jsonResponse.main.temp_min - 273.15).toFixed(2),
            tempMax: (jsonResponse.main.temp_max - 273.15).toFixed(2),
            humidity: jsonResponse.main.humidity,
            feelslike: (jsonResponse.main.feels_like - 273.15).toFixed(2),
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
       }
       catch(err) {
        throw err;
       }
    }



    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
        setCity("");
        let info = await GetWeatherInfo();
        updateWeather(info);
        } catch (err) {
          setErr(true);
        }
    };

    return (
        <div className='SearchBox'>
            <h3>Search For a Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /> <br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
            {err && <p style={{color:"red"}} >No Such Page exists !</p>}
        </div>
    );
}
