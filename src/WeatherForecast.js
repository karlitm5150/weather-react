import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
 
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
     function load() {
    let apiKey = "ca5b694c24700cef06951fbc0221c234";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

    useEffect(() => {
      setLoaded(false);
    }, [props.coordinates])

    if (loaded) {
      return (
        <div classname="WeatherForecast">
        <div className="row">
        <div className="col-1 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[0]} />
        </div>
        <div className="col-1 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="col-1 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="col-1 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="col-1 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[4]} />
        </div>
        <div className="col-1 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[5]} />
        </div>
        <div className="col-1 shadow p-3 mb-5 bg-body rounded border text-center">
          <WeatherForecastDay data={forecast[6]} />
        </div>
        </div>
        </div>
      );
    
    } else {
      load();

      return null;
    }

  }