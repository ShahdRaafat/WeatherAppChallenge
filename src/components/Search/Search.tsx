import Button from "../shared/Button";
import SearchBar from "./SearchBar";

function Search() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-[42px] tracking-wide font-bold text-white mb-12 text-center font-bricolage">
        How's the sky looking today?
      </h2>
      <div className="flex items-center gap-2 w-[80%] mx-auto">
        <SearchBar />
        <Button>Search</Button>
      </div>
    </div>
  );
}

export default Search;
