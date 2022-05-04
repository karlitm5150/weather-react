import React, { useState } from "react";
import axios from "axios";
import WeatherSearch from "./WeatherSearch.js";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setweatherData] = useState({ ready: false });
    function handleResponse(response){
        setweatherData({
            ready: true,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            description: response.data.weather[0].description,
            date: "Wed 9:00 AM",
            temperature: response.data.main.temp,
            city: response.data.name,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity
        });

    }
    if (weatherData.ready) {
        return (
    <div>
        <div className="Weather">  
        <form className="search-form">
          <div className="row">
            <div className="col-6">
              <WeatherSearch />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm"
              />
            </div>
            <div className="col-3">
              <button
                className="btn btn-success w-100"
              >
                Current
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <h2>
          {weatherData.city}
        </h2>
        <h3>{weatherData.date}</h3>
        <h4 className="text-capitalize">{weatherData.description}</h4>
        <p></p>
        <div className="row">
        <div className="col-3">
          <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />
          <h1 className="temperature">
            {Math.round(weatherData.temperature)}{" "}
            <span className="units">
              °C | °F
            </span>
          </h1>
        <div className="col-6">
          <p>
            Humidity: {weatherData.humidity}%<br />Wind: {weatherData.wind}km/h
          </p>
        </div>
        </div>
        </div>
      </div>


       <div className="row">
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <h3>
            Sun<br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="float-left"
            />
          </h3>
          <p>
            70°F / 51°F
          </p>
        </div>
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <h3>
            Mon <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="float-left"
            />
          </h3>
          <p>
            69°F / 51°F
          </p>
        </div>
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <h3>
            Tues<br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="float-left"
              />
          </h3>
          <p>
            71°F / 52°F
          </p>
          </div>
          <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
            <h3>
              Wed<br />
              <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="float-left"
              />
            </h3>
            <p>
              73°F / 52°F
            </p>
          </div>
          <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
            <h3>
              Thurs<br />
              <img
             src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="float-left"
              />
            </h3>
            <p>
              70°F / 51°F
            </p>
          </div>
        </div>
        </div>
    );
    } else {
    const apiKey = "d7b1e8f747dbf2f8c5f9d850588e67f8";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
;
    }

    
}