import React from "react";
import WeatherCondition from "../Main/components/WeatherCondition";
import WeatherForecast from "../Main/components/WeatherForecast";
import "./Main.css";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
      current: [],
      forecasts: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane"
      )
      .then((res) => {
        console.log(res);
        const city = res.data.data.city;
        const current = res.data.data.current;
        const forecasts = res.data.data.forecast.slice(0, 10);

        this.setState({
          city: city,
          current: current,
          forecasts: forecasts,
        });
      });
  }

  render() {
    return (
      <div>
        <WeatherCondition
          city={this.state.city.name}
          windSpeed={this.state.current.windSpeed}
          humidity={this.state.current.humidity}
          max={this.state.current.maxCelsius}
          windDirection={this.state.current.windDirection}
        />
        <WeatherForecast forecasts={this.state.forecasts} />
      </div>
    );
  }
}

export default Main;
