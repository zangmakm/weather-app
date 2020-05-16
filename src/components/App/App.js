import React from "react";
import Header from "../Header";
import SearchBar from "../SearchBar";
import Main from "../Main";
import Footer from "../Footer";
import Loader from "../Loader";
import Error from "../Error";
import "./App.css";
import { connect } from "react-redux";
import { loadWeather } from "../../redux/actions/searchbarAction";

class App extends React.Component {
  componentDidMount() {
    this.props.getWeather("brisbane");
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <SearchBar />
        {this.props.isLoading ? (
          <Loader />
        ) : this.props.error ? (
          <Error />
        ) : (
          <Main />
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.weather.isLoading,
  error: state.weather.error,
});

const mapDispatchToProps = (dispatch) => ({
  getWeather: (city) => dispatch(loadWeather(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
