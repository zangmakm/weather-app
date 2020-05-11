import React from "react";
import Header from "../Header";
import SearchBar from "../SearchBar";
import Main from "../Main";
import Footer from "../Footer";
import "./App.css";
import { getWeatherData } from "../../utils/axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
      current: [],
      forecasts: [],
      limit: 5,
      input: "",
      unit: "c",
    };
  }

  componentDidMount() {
    getWeatherData("brisbane").then((data) => {
      const city = data.city;
      const current = data.current;
      const forecasts = data.forecast.slice(0, 10);
      this.setState({
        city: city,
        current: current,
        forecasts: forecasts,
      });
    });
  }

  changeLimit = (limit) => {
    this.setState({ limit });
  };

  changeCity = (event) => {
    const city = event.target.value;
    this.setState({
      input: city,
    });
  };

  handleSearch = (event) => {
    getWeatherData(this.state.input).then((data) => {
      const city = data.city;
      const current = data.current;
      const forecasts = data.forecast.slice(0, 10);
      this.setState({
        city: city,
        current: current,
        forecasts: forecasts,
      });
    });
  };

  handleUnit = (event) => {
    const unit = this.state.unit === "c" ? "f" : "c";
    this.setState({ unit });
  };

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <SearchBar
          input={this.state.input}
          changeCity={this.changeCity}
          handleSearch={this.handleSearch}
          unit={this.state.unit}
          handleUnit={this.handleUnit}
        />
        <Main
          city={this.state.city}
          current={this.state.current}
          forecasts={this.state.forecasts}
          limit={this.state.limit}
          changeLimit={this.changeLimit}
          unit={this.state.unit}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
