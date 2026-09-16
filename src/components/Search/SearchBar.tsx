import { searchIcon } from "../../assets/images";
interface SearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}
function SearchBar({ searchQuery, onSearch }: SearchBarProps) {
  return (
    <div className="flex items-center bg-neutral-800 rounded-lg py-2 px-3 flex-1 text-white gap-2">
      <img src={searchIcon} alt="search" className="h-4 w-4 mr-2" />
      <input
        className="flex-1"
        type="text"
        placeholder="Search for a place ..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
