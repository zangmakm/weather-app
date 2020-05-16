import React from "react";
import "./SearchBar.css";
import { connect } from "react-redux";
import {
  changeInputValue,
  handleUnit,
  loadWeather,
} from "../../redux/actions/searchbarAction";

class SearchBar extends React.Component {
  render() {
    return (
      <nav>
        <div style={{ flex: 1 }}>
          <input
            className="search-input"
            onChange={(event) => this.props.changeCity(event.target.value)}
            value={this.props.input}
          />
          <button
            type="submit"
            className="search-btn"
            onClick={() => this.props.handleSearch(this.props.input)}
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

const mapStateToProps = (state) => ({
  input: state.searchbar.input,
  unit: state.searchbar.unit,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (input) => dispatch(changeInputValue(input)),
  handleUnit: () => dispatch(handleUnit()),
  handleSearch: (city) => dispatch(loadWeather(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
