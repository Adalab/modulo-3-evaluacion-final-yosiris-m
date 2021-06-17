import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Filter.css";

class Filters extends React.Component {
  render() {
    return (
      <form>
        <div className="inputTextBox">
          <input
            className="inputText"
            type="text"
            onChange={this.props.onFilterChange}
            value={this.props.filterText}
          />
        </div>
      </form>
    );
  }
}

Filters.propTypes = {
  onFilterChange: PropTypes.func,
  filterText: PropTypes.string,
};

export default Filters;
