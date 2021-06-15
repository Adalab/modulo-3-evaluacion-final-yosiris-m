import React from "react";
import CharacterCard from "./CharacterCard";

class CharacterList extends React.Component {
  render() {
    return (
      <div>
        {this.props.characters.map(function (seriesResult, index) {
          return <CharacterCard key={index} actor={seriesResult} />;
        })}
      </div>
    );
  }
}
export default CharacterList;
