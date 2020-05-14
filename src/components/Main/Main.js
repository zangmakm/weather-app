import React from "react";
import WeatherCondition from "./components/WeatherCondition";
import WeatherForecast from "./components/WeatherForecast";
import "./Main.css";

function Main(props) {
  return (
    <div>
      <WeatherCondition />
      <WeatherForecast />
    </div>
  );
}

export default Main;
