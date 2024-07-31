import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-44 hover:scale-150 transition-all duration-300">
      <img src={IMG_CDN_URL + poster_path} alt="Movie card" />
    </div>
  );
};

export default MovieCard;
