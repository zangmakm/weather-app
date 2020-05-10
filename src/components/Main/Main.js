import React from "react";
import WeatherCondition from "./components/WeatherCondition";
import WeatherForecast from "./components/WeatherForecast";
import "./Main.css";

function Main(props) {
  return (
    <div>
      <WeatherCondition
        city={props.city.name}
        windSpeed={props.current.windSpeed}
        humidity={props.current.humidity}
        max={props.current.maxCelsius}
        windDirection={props.current.windDirection}
      />
      <WeatherForecast
        forecasts={props.forecasts}
        changeLimit={props.changeLimit}
        limit={props.limit}
      />
    </div>
  );
}

export default Main;
