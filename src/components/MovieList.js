import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="flex flex-col gap-y-5 mt-6 px-7">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <div className="flex">
        <div className="flex gap-x-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
