import React from "react";
import ForecastRow from "./ForecastRow";
import { format } from "date-fns";

import "./WeatherForecast.css";

class WeatherForecast extends React.Component {
  render() {
    //console.log(this.props);
    const limit = this.props.limit;
    const forecasts = this.props.forecasts.slice(0, limit);
    const unit = this.props.unit;
    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
          <button
            id="5items"
            className={`forecast__switch_0
            ${limit === 5 ? " switch-active" : ""}`}
            onClick={() => this.props.changeLimit(5)}
          >
            5 items
          </button>
          <button
            className={`forecast__switch_1
              ${limit === 10 ? "switch-active" : ""}`}
            onClick={() => this.props.changeLimit(10)}
          >
            10 items
          </button>
        </div>
        {forecasts.map((forecast) => {
          const date = new Date(forecast.time * 1000);
          const day = format(date, "EEE");
          const time = format(date, "HH:mm");

          return (
            <ForecastRow
              key={forecast.time}
              day={day}
              high={unit === "c" ? forecast.maxCelsius : forecast.maxFahrenheit}
              low={unit === "c" ? forecast.minCelsius : forecast.minFahrenheit}
              time={time}
              unit={unit}
            />
          );
        })}
      </section>
    );
  }
}

export default WeatherForecast;
