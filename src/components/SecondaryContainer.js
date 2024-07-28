import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies)
  
  if (!nowPlayingMovies) return;

  return (
    <div className="bg-black">
      <div className="relative -mt-64 z-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        {/* <MovieList title={"Top Rated"} movies={movies} />
        <MovieList title={"Upcoming Movies"} movies={movies} /> */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
