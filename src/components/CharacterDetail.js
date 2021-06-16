import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Rick_Morty_logo.png";
import "../stylesheets/CharacterList.css";
class CharacterDetail extends React.Component {
  render() {
    console.log(this.props);
    const character = this.props.characters.find(
      (character) => `${character.id}` === this.props.match.params.id
    );

    if (!character) {
      return <div>Not found!</div>;
    }

    return (
      <div className="cardBox">
        <div className="box">
          <img src={logo} className="images" alt="imagen" />
          <Link to="/">initial Home</Link>
          <div className="card">
            <div>
              <img src={character.image} alt="imagen" />
            </div>
            <div>{character.name}</div>
            <div>Status:{character.status}</div>
            <div>Species:{character.species}</div>
            <div>Origin:{character.origin.name}</div>
            <div>Episode:{character.episode}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default CharacterDetail;
