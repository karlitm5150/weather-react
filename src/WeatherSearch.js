import React from "react";

export default function WeatherSearch() {
     return(
         <input
                type="search"
                placeholder="Type a city..."
                autofocus="on"
                autocomplete="off"
                className="form-control shadow-sm"
              />
    );
}