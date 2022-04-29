import React from "react";
import WeatherSearch from "./WeatherSearch.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">  
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
          San Diego, USA
        </h2>
        <p id="description"></p>
        <div className="row">
        <div className="col-3">
          <h1 id="temperature">
            &#9925 52
            <span className="units">
              <a href="#" id="celsius-link">°C</a> |
              <a href="#" id="fahrenheit-link">°F</a>
            </span>
        </h1>
        <div className="col-6">
          <p>
            Humidity: <span id="humidity"></span>%<br />Wind: <span id="wind"></span> km/h
          </p>
        </div>
        </div>
        </div>
      </div>


       <div className="row">
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <h3>
            Sun<br />&#9925
          </h3>
          <p>
            70°F / 51°F
          </p>
        </div>
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <h3>
            Mon <br /> &#9925
          </h3>
          <p>
            69°F / 51°F
          </p>
        </div>
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <h3>
            Tues<br /> &#9728
          </h3>
          <p>
            71°F / 52°F
          </p>
          </div>
          <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
            <h3>
              Wed<br /> &#9925
            </h3>
            <p>
              73°F / 52°F
            </p>
          </div>
          <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
            <h3>
              Thurs<br /> &#9925
            </h3>
            <p>
              70°F / 51°F
            </p>
          </div>
        </div>




    </div>  
  );
}
