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

          <select
            onChange={this.props.onFilterStatus}
            value={this.props.filterStatus}
          >
            <option value="">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
          </select>

          <select
            className="selectSpecie"
            onChange={this.props.onFilterSpecies}
            value={this.props.filterSpecie}
          >
            <option value="">All</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
          </select>
        </div>
      </form>
    );
  }
}

Filters.propTypes = {
  onFilterChange: PropTypes.func,
  filterText: PropTypes.string,
  onFilterSpecie: PropTypes.func,
  filterSpecie: PropTypes.string,
};

export default Filters;
