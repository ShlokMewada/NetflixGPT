const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video flex flex-col pt-[20%] px-16 gap-y-3 bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="text-3xl w-1/4 text-white">{overview}</p>
      <div className="flex gap-x-3">
        <button className="flex justify-between items-baseline gap-x-5 rounded-md bg-white py-4 px-12 hover:bg-opacity-70">
          <i class="fa-solid fa-play"></i>
          <p className="text-lg font-semibold">Play</p>
        </button>
        <button className="flex justify-between items-baseline gap-x-5 rounded-md bg-gray-500 py-4 px-12 text-white bg-opacity-50 hover:bg-opacity-100">
          <i class="fa-solid fa-circle-info"></i>
          <p className="text-lg font-semibold">More Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
