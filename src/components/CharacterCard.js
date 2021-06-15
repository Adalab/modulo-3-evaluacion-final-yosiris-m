import React from "react";

class CharacterCard extends React.Component {
  render() {
    return (
      <div className="Filter">
        <div>
          <img src={this.props.actor.image} />{" "}
        </div>
        <div> {this.props.actor.name} </div>
        <div> {this.props.actor.species}</div>
      </div>
    );
  }
}
export default CharacterCard;
