import Button from "../shared/Button";

interface SearchButtonProps {
  onClick: () => void;
}

function SearchButton({ onClick }: SearchButtonProps) {
  return <Button onClick={onClick}>Search</Button>;
}

export default SearchButton;
