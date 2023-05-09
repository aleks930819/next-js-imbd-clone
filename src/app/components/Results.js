const Results = ({ results }) => {
  const imgPath = 'https://image.tmdb.org/t/p/original/';
  return (
    <div>
      {results.map((result) => {
        return (
          <div key={result.id}>
            <img
              src={`${imgPath}${result.poster_path}`}
              alt={result.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Results;
