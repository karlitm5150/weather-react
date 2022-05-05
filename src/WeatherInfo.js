import React from "react";
import FormattedDate from "./FormattedDate";

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
          <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />
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
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
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
              src={props.data.iconUrl}
              alt={props.data.description}
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
              src={props.data.iconUrl}
              alt={props.data.description}
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
              src={props.data.iconUrl}
              alt={props.data.description}
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
             src={props.data.iconUrl}
              alt={props.data.description}
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
}