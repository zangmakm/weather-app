import React from "react";
import "./SearchBar.css";
import { connect } from "react-redux";
import {
  change_input_value,
  handle_unit,
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
            onClick={this.props.handleSearch}
          >
            <i className="fa fa-search"></i>
          </button>

          <button className="temp-switch" onClick={this.props.handle_unit}>
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
  changeCity: (input) => dispatch(change_input_value(input)),
  handle_unit: () => dispatch(handle_unit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
