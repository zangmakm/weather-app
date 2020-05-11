import React from "react";
import "./ForecastRow.css";

class ForecastRow extends React.Component {
  render() {
    return (
      <div>
        <div className="weather-forecast__row">
          <span className="weather-forecast__day">{this.props.day}</span>
          <span className="weather-forecast__icon">
            <i className="fa fa-clock-o"></i>
            {this.props.time}
          </span>
          <span className="weather-forecast__high">
            {this.props.high} {this.props.unit.toUpperCase()}
          </span>
          <span className="weather-forecast__low">
            {this.props.low} {this.props.unit.toUpperCase()}
          </span>
        </div>
      </div>
    );
  }
}

export default ForecastRow;
