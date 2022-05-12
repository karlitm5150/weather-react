import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
      console.log(forecast);
      return (
        <div className="row">
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <h3>
            {forcast[0].dt}<br />
            <div classname="float-left">
            <WeatherIcon code={forecast[0].weather[0].icon} />
          </div>
          </h3>
          <p>
            <span className="WeatherForecast-temperature-max">{forecast[0].temp.max}°</span>
             / <span className="WeatherForecast-temperature-min">{forecast[0].temp.min}°</span>
          </p>
        </div>
        </div>
      );
    
    } else {
      let apiKey = "d30388075151941972c2605c5f0003d7";
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

      return null;
    }

  }