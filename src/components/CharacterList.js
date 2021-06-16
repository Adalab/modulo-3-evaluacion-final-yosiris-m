import React from "react";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

import "../stylesheets/CharacterList.css";

class CharacterList extends React.Component {
  render() {
    return (
      <div className="CardImages">
        {this.props.characters.map(function (seriesResult, index) {
          return (
            <Link key={index} to={`/character/${seriesResult.id}`}>
              <CharacterCard actor={seriesResult} />;
            </Link>
          );
        })}
      </div>
    );
  }
}
export default CharacterList;
