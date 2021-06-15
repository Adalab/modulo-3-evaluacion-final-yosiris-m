const FetchData = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const result = data.results.map((result) => {
        return {
          image: result.image,
          name: `${result.name}`,
          species: result.species,
        };
      });

      return result;
    });
};

export default FetchData;
