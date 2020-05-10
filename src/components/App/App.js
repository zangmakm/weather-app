import React from "react";
import Header from "../Header";
import SearchBar from "../SearchBar";
import Main from "../Main";
import Footer from "../Footer";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
      current: [],
      forecasts: [],
      limit: 5,
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

  changeLimit = (limit) => {
    this.setState({ limit });
  };

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <SearchBar />
        <Main
          city={this.state.city}
          current={this.state.current}
          forecasts={this.state.forecasts}
          limit={this.state.limit}
          changeLimit={this.changeLimit}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
