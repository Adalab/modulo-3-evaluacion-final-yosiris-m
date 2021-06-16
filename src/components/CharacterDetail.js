import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">Home</Link>
          <div>
            <img src={character.image} />
          </div>
          <div className="lasName">{character.name}</div>
          <div className="lasName">{character.species}</div>
          <ul>
            <li>Status:{character.status}</li>
            <li>Origin:{character.origin.name}</li>
            <li>Episode:{character.episode}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default CharacterDetail;
