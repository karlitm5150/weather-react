import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props) {
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <h3>
            <div className="WeatherForecast-day">{day()}</div>
            <br />
            <div classname="float-left">
            <WeatherIcon code={props.data.weather[0].icon} />
          </div>
          </h3>
          <p>
            <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
             / <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
          </p>
        </div>
    );
}