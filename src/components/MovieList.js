import React from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, movies }) => {
  const movieResultsFinal = movies.filter(
    (movie) => movie.poster_path !== null
  );

  const getSliderSettings = () => {
    const length = movieResultsFinal.length;
    return {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: Math.min(7, length),
      slidesToScroll: Math.min(2, length),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(3, length),
            slidesToScroll: Math.min(3, length),
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: Math.min(2, length),
            slidesToScroll: Math.min(2, length),
            initialSlide: Math.min(2, length - 1),
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
      variableWidth: true,
    };
  };

  return (
    <div className="flex flex-col gap-y-5 mt-6 px-7">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <div className="">
        <Slider {...getSliderSettings()}>
          {movieResultsFinal.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieList;
