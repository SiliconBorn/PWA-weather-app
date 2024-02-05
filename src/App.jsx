import { useState } from "react";
import "./App.css";
import { fetchWeather } from "./api/fetchWeather";
const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      console.log(data);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="SEARCH....."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>
              {weather.name}
              <sup>{weather.sys.country}</sup>
            </span>
          </h2>
          <div className="city-temp">
            {
              Math.round(weather.main.temp)
            }
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} className="city-icon" alt={weather.weather[0].description} />
            <p>
              {weather.weather[0].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
