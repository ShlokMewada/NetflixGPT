import { useRef } from "react";
import model from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const prompt =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, andaz apna apna, Sholay, Don, koi mil gaya";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const geminiMovies = response.text().split(",");
    console.log(geminiMovies);

    // TODO: if(!response) return "error" , i'll handle the error later

    const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMoviesResult({
        movieNames: geminiMovies,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="w-1/2">
      <form
        className="p-6"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex items-baseline justify-center bg-black">
          <input
            ref={searchText}
            type="text"
            className="py-2 px-6 m-4 border-2 border-black rounded-lg w-3/4"
            placeholder="what would you like to watch today?"
          />
          <button
            className="py-3 px-10 bg-red-700 rounded-lg hover:bg-red-600 text-white"
            onClick={handleGptSearchClick}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
