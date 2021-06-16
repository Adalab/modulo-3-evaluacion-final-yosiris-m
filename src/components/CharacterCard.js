import React from "react";
import "../stylesheets/CharacterCard.css";

class CharacterCard extends React.Component {
  render() {
    return (
      <div className="cardBox">
        <div className="box">
          <div>
            <img className="photo" src={this.props.actor.image} alt="imagen" />
          </div>
          <div className="lasName">{this.props.actor.name}</div>
          <div className="lastSpecies">{this.props.actor.species}</div>
        </div>
      </div>
    );
  }
}
export default CharacterCard;
