import React from "react";
import Umbrella from "../../../../assets/icon-umbrella.png";
import Wind from "../../../../assets/icon-wind.png";
import Compass from "../../../../assets/icon-compass.png";
import "./WeatherCondition.css";

class WeatherCondition extends React.Component {
  render() {
    return (
      <section className="weather-condition">
        <div className="weather-condition__location">{this.props.city}</div>
        <div style={{ textAlign: "center", fontSize: "14px" }}>Clear</div>
        <div className="weather-condition__temp">
          {this.props.max} {this.props.unit.toUpperCase()}
        </div>
        <div className="weather-condition__desc">
          <div>
            <img src={Umbrella} alt="Umbrella" />
            <span className="citem">{this.props.humidity}</span>
          </div>
          <div>
            <img src={Wind} alt="wind" />{" "}
            <span className="citem">{this.props.windSpeed} km/h</span>
          </div>
          <div>
            <img src={Compass} alt="compass" />{" "}
            <span className="citem">{this.props.windDirection}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default WeatherCondition;
