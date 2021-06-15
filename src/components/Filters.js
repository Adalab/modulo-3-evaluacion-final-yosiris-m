import React from "react";

class Filters extends React.Component {
  render() {
    return (
      <form>
        <input
          className="inputText"
          type="text"
          onChange={this.props.onFilterChange}
          value={this.props.filterText}
        />
      </form>
    );
  }
}
export default Filters;
