import React from "react";
import WeatherCondition from "./components/WeatherCondition";
import WeatherForecast from "./components/WeatherForecast";
import "./Main.css";

function Main(props) {
  const unit = props.unit;
  return (
    <div>
      <WeatherCondition
        city={props.city.name}
        windSpeed={props.current.windSpeed}
        humidity={props.current.humidity}
        max={
          unit === "c" ? props.current.maxCelsius : props.current.maxFahrenheit
        }
        windDirection={props.current.windDirection}
        unit={props.unit}
      />
      <WeatherForecast
        forecasts={props.forecasts}
        changeLimit={props.changeLimit}
        limit={props.limit}
        unit={props.unit}
      />
    </div>
  );
}

export default Main;
