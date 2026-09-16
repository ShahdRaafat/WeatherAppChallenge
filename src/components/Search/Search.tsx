import { useState } from "react";
import { useLocation } from "../../context/LocationContext";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const { setLocation } = useLocation();

  const handleSubmit = () => {
    setLocation(searchQuery);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-[42px] tracking-wide font-bold text-white mb-12 text-center font-bricolage">
        How's the sky looking today?
      </h2>
      <div className="flex items-center gap-2 w-[80%] mx-auto">
        <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
        <SearchButton onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default Search;
