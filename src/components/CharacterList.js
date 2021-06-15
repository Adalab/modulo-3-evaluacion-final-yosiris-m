import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheets/CharacterList.css";

class CharacterList extends React.Component {
  render() {
    return (
      <div className="CardImages">
        {this.props.characters.map(function (seriesResult, index) {
          return <CharacterCard key={index} actor={seriesResult} />;
        })}
      </div>
    );
  }
}
export default CharacterList;
