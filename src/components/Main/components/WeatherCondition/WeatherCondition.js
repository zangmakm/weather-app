import React from "react";
import Umbrella from "../../../../assets/icon-umbrella.png";
import Wind from "../../../../assets/icon-wind.png";
import Compass from "../../../../assets/icon-compass.png";
import "./WeatherCondition.css";
import { connect } from "react-redux";

class WeatherCondition extends React.Component {
  render() {
    return (
      <section className="weather-condition">
        <div className="weather-condition__location">
          {this.props.city.name}
        </div>
        <div style={{ textAlign: "center", fontSize: "14px" }}>Clear</div>
        <div className="weather-condition__temp">
          {this.props.unit === "c"
            ? this.props.current.maxCelsius
            : this.props.current.maxFahrenheit}{" "}
          {this.props.unit.toUpperCase()}
        </div>
        <div className="weather-condition__desc">
          <div>
            <img src={Umbrella} alt="Umbrella" />
            <span className="citem">{this.props.current.humidity}</span>
          </div>
          <div>
            <img src={Wind} alt="wind" />{" "}
            <span className="citem">{this.props.current.windSpeed} km/h</span>
          </div>
          <div>
            <img src={Compass} alt="compass" />{" "}
            <span className="citem">{this.props.current.windDirection}</span>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  unit: state.searchbar.unit,
  city: state.weather.city,
  current: state.weather.current,
});

export default connect(mapStateToProps)(WeatherCondition);
