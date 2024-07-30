import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-44">
      <img height="100px" src={IMG_CDN_URL + poster_path} alt="Movie card" />
    </div>
  );
};

export default MovieCard;
