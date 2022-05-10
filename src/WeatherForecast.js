
import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "d7b1e8f747dbf2f8c5f9d850588e67f8";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="row">
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <h3>
            Sun<br />
            <div classname="float-left">
            <WeatherIcon code="01d" />
          </div>
          </h3>
          <p>
            <span className="WeatherForecast-temperature-min">52°</span> / <span className="WeatherForecast-temperature-max">71°</span>
          </p>
        </div>
        </div>

    );
}