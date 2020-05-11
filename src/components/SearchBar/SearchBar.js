import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <nav>
        <div style={{ flex: 1 }}>
          <input
            className="search-input"
            onChange={this.props.changeCity}
            value={this.props.input}
          />
          <button
            type="submit"
            className="search-btn"
            onClick={this.props.handleSearch}
          >
            <i className="fa fa-search"></i>
          </button>

          <button className="temp-switch" onClick={this.props.handleUnit}>
            <i
              className="fa fa-thermometer-empty"
              aria-hidden="true"
              style={{ paddingRight: "5px" }}
            ></i>
            <sup>&deg;</sup>
            {this.props.unit.toUpperCase()}
          </button>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
