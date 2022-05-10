import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div>
        <h2>
          {props.data.city}
        </h2>
        <h3><FormattedDate date={props.data.date}/></h3>
        <h4 className="text-capitalize">{props.data.description}</h4>
        <p></p>
        <div className="row">
        <div className="col-3">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="float-left">
            <WeatherTemperature celcius={props.data.temperature} />
          </div>
        <div className="col-6">
          <p>
            Humidity: {props.data.humidity}%<br />Wind: {props.data.wind}km/h
          </p>
        </div>
        </div>
        </div>
      </div>


      
        </div>
    );
}