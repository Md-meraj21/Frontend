import { useState } from "react";
import CardInfo from "./CardInfo";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wondurlust",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateWeather = (Info) => {
        setWeatherInfo(Info);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <p>This is our Weather App</p>
            <SearchBox updateWeather={updateWeather} />
            <CardInfo Info={weatherInfo} />
        </div>
    );
}
