const GptSearchBar = () => {
  return (
    <div className="w-1/2">
      <form className="p-6">
        <div className="flex items-baseline justify-center bg-black">
          <input
            type="text"
            className="py-2 px-6 m-4 border-2 border-black rounded-lg w-3/4"
            placeholder="what would you like to watch today?"
          />
          <button className="py-3 px-10 bg-red-700 rounded-lg hover:bg-red-600 text-white">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
