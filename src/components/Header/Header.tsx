import Logo from "./Logo";
import UnitsToggle from "./UnitsToggle";

function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <Logo />
      <UnitsToggle />
    </div>
  );
}

export default Header;
