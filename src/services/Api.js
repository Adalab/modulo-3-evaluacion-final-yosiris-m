const FetchData = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const result = data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          episode: character.episode,
        };
      });

      return result;
    });
};

export default FetchData;
