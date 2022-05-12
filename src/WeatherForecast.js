import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
      return (
        <div classname="WeatherForecast">
        <div className="row">
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[0]} />
        </div>
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[4]} />
        </div>
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[5]} />
        </div>
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[6]} />
        </div>
        </div>
        </div>
      );
    
    } else {
      let apiKey = "cd183893dec8034d4cb5133e87e32f89";
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

      return null;
    }

  }