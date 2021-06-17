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
        <Link className="linkHome" to="/">
          ⬅ initial Home
        </Link>
        <div>
          <div className="containerCard1">
            <img
              className="containerImage"
              src={character.image}
              alt="images"
            />

            <div className="description">
              <div className="lasNameCard">{character.name}</div>
              <div>Status:{character.status}</div>
              <div>Species:{character.species}</div>
              <div>Origin:{character.origin.name}</div>
              <div>Episode:{character.episode}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CharacterDetail;
