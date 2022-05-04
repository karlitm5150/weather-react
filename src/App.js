import React from "react";
import Weather from "./Weather.js";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity="New York" />
        </div>

      <footer>
        This projet is created by Karli Thuen and is{" "}
        <a href="https://github.com/karlitm5150/weather-react">open-sourced on GitHub
        </a> 
      </footer> 

    </div>  
  );
}
