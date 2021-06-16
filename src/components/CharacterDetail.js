import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetail.css";
import NotFound from "./NotFound";
class CharacterDetail extends React.Component {
  render() {
    const character = this.props.characters.find(
      (character) => `${character.id}` === this.props.match.params.id
    );
    if (!character) {
      return <NotFound />;
    }

    return (
      <div>
        <Link to="/">initial Home</Link>
        <div className="containerCard">
          <div className="container1">
            <div>
              <img src={character.image} alt="imagen" />
            </div>
            <div>
              <div>{character.name}</div>
              <div>Status:{character.status}</div>
              <div>Species:{character.species}</div>
              <div>Origin:{character.origin.name}</div>
              <div>Episode:{character.episode}</div>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CharacterDetail;
