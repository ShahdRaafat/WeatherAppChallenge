import { searchIcon } from "../../assets/images";
function SearchBar() {
  return (
    <div className="flex items-center bg-neutral-800 rounded-lg py-2 px-3 flex-1 text-white gap-2">
      <img src={searchIcon} alt="search" className="h-4 w-4 mr-2" />
      <input type="text" placeholder="Search for a place ..." />
    </div>
  );
}

export default SearchBar;
