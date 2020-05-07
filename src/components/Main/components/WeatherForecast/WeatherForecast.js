import React from "react";
import ForecastRow from "./ForecastRow";
import { format } from "date-fns";

import "./WeatherForecast.css";

class WeatherForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFive: true,
      isTen: false,
      forecasts: this.props.forecasts.slice(0, 5),
    };
  }

  // state = {
  //   forecast: this.props.forecasts.slice(0, 5),
  // };

  componentWillReceiveProps(nextProps) {
    this.setState({
      forecasts: nextProps.forecasts.slice(0, 5),
    });
  }

  // componentDidMount() {
  //   //const forecast = this.props.forecasts.slice(0, 5);
  //   this.setState({
  //     forecasts: this.props.forecasts,
  //   });
  // }

  changeItem(e) {
    console.log(e.target.className);
    if (e.target.id === "5items") {
      this.setState({
        isFive: true,
        isTen: false,
        forecasts: this.props.forecasts.slice(0, 5),
      });
    } else {
      this.setState({
        isFive: false,
        isTen: true,
        forecasts: this.props.forecasts,
      });
    }
  }

  render() {
    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
          <button
            id="5items"
            className={[
              "forecast__switch_0",
              this.state.isFive && "switch-active",
            ].join(" ")}
            onClick={(e) => this.changeItem(e)}
          >
            5 items
          </button>
          <button
            className={[
              "forecast__switch_1",
              this.state.isTen && "switch-active",
            ].join(" ")}
            onClick={(e) => this.changeItem(e)}
          >
            10 items
          </button>
        </div>
        {this.state.forecasts.map((forecast) => {
          const date = new Date(forecast.time * 1000);
          const day = format(date, "EEE");
          const time = format(date, "HH:mm");

          return (
            <ForecastRow
              key={forecast.time}
              day={day}
              high={forecast.maxCelsius}
              low={forecast.minCelsius}
              time={time}
            />
          );
        })}
      </section>
    );
  }
}

export default WeatherForecast;
