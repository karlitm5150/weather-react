import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
          <div classname="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          <h1 className="temperature">
            {Math.round(props.data.temperature)}{" "}
            <span className="units">
              °C | °F
            </span>
          </h1>
        <div className="col-6">
          <p>
            Humidity: {props.data.humidity}%<br />Wind: {props.data.wind}km/h
          </p>
        </div>
        </div>
        </div>
      </div>


       <div className="row">
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <h3>
            Sun<br />
            <div classname="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          </h3>
          <p>
            70°F / 51°F
          </p>
        </div>
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <h3>
            Mon <br />
            <div classname="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          </h3>
          <p>
            69°F / 51°F
          </p>
        </div>
        <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
          <h3>
            Tues<br />
            <div classname="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          </h3>
          <p>
            71°F / 52°F
          </p>
          </div>
          <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
            <h3>
              Wed<br />
              <div classname="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
            </h3>
            <p>
              73°F / 52°F
            </p>
          </div>
          <div className="col-2 shadow p-3 mb-5 bg-body rounded border text-center">
            <h3>
              Thurs<br />
             <div classname="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
            </h3>
            <p>
              70°F / 51°F
            </p>
          </div>
        </div>
        </div>
    );
}