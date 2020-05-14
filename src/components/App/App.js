import React from "react";
import Header from "../Header";
import SearchBar from "../SearchBar";
import Main from "../Main";
import Footer from "../Footer";
import "./App.css";
import { getWeatherData } from "../../utils/axios";
import { connect } from "react-redux";
import { getWeather } from "../../redux/actions/weatherAction";

class App extends React.Component {
  componentDidMount() {
    getWeatherData("brisbane").then(this.updateWeather);
  }

  updateWeather = (data) => {
    const weather = {
      city: data.city,
      current: data.current,
      forecasts: data.forecast.slice(0, 10),
    };
    //console.log(weather);
    this.props.getWeather(weather);
  };

  handleSearch = () => {
    getWeatherData(this.props.input).then(this.updateWeather);
  };

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <SearchBar handleSearch={this.handleSearch} />
        <Main />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  input: state.searchbar.input,
});

const mapDispatchToProps = (dispatch) => ({
  getWeather: (weather) => dispatch(getWeather(weather)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
