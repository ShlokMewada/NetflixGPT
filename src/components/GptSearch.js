import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="pt-20 flex flex-col items-center justify-center w-full">
      <div className="fixed top-0 -z-10">
        <img className="h-screen object-cover md:h-auto" src={BG_URL} alt="" />
      </div>
      <div className="w-full mt-10 md:mt-0 mx-auto">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
