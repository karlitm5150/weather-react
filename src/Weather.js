import React from "react";
import WeatherSearch from "./WeatherSearch.js";
import "./Weather.css";

export default function Weather() {
     let weatherData = {
    city: "San Diego",
    temperature: 20,
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 25,
    wind: 0
  };  

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
        <h2 className="city">
          {weatherData.city}
        </h2>
        <p></p>
        <div className="row">
        <div className="col-3">
          <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
          <h1>
            {weatherData.temperature}{" "}
            <span className="units">
              °C | °F
            </span>
          </h1>
        <div className="col-6">
          <p>
            {weatherData.humidity} <span></span>%<br />{weatherData.wind} <span></span> km/h
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
              src={weatherData.imgUrl}
              alt={weatherData.description}
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
              src={weatherData.imgUrl}
              alt={weatherData.description}
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
              src={weatherData.imgUrl}
              alt={weatherData.description}
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
              src={weatherData.imgUrl}
              alt={weatherData.description}
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
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
              />
            </h3>
            <p>
              70°F / 51°F
            </p>
          </div>
        </div>
        </div>
    )
}