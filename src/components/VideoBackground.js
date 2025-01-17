import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailer = useSelector((store) => store.movies?.trailerVideo);

  // maybe optional for some devices not working on mine so did this below { if condition}
  if (!trailer) return;

  return (
    <div>
      <iframe
        className="w-screen overflow-x-hidden aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailer.key + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
