const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute overflow-x-hidden w-screen aspect-video flex flex-col pt-[20%] px-16 gap-y-3 bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-6xl font-semibold md:font-bold text-white">
        {title}
      </h1>
      {overview.length > 100 ? (
        <p className="hidden md:block text-3xl w-1/4 text-white">
          {overview.substring(0, 100) + "..."}
        </p>
      ) : (
        <p className="hidden md:block text-3xl w-1/4 text-white">{overview}</p>
      )}
      <div className="flex gap-x-3">
        <button className="flex py-1 px-2 justify-between items-center md:items-baseline gap-x-5 md:gap-x-2 rounded-md bg-white md:py-4 md:px-12 hover:bg-opacity-70">
          <i className="fa-solid fa-play"></i>
          <p className="text-lg font-semibold">Play</p>
        </button>
        <button className="flex py-1 px-2 items-center justify-between md:items-baseline gap-x-5 md:gap-x-2 rounded-md bg-gray-500 md:py-4 md:px-12 text-white bg-opacity-50 hover:bg-opacity-100">
          <i className="fa-solid fa-circle-info"></i>
          <p className="text-lg font-semibold">More Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
