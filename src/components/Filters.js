import React from "react";
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
export default Filters;
