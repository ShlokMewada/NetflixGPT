import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // to remove empty spaces from carousal
  const movieResultsFinal = movies.filter(
    (movie) => movie.poster_path !== null
  );

  return (
    <div className="flex flex-col gap-y-5 mt-6 px-7">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <div className="">
        <Slider {...settings}>
          {movieResultsFinal.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieList;
