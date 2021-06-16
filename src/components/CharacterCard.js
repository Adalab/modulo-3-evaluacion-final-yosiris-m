import React from "react";

class CharacterCard extends React.Component {
  render() {
    return (
      <div className="cardBox">
        <div className="box">
          <div>
            <img src={this.props.actor.image} alt="imagen" />
          </div>
          <div className="lasName">{this.props.actor.name}</div>
          <div className="lasName">{this.props.actor.species}</div>
        </div>
      </div>
    );
  }
}
export default CharacterCard;
