import HeaderGallery from "./header-gallery";
import MainNavigation from "../navigation/main-navigation";
import HeaderHeading from "./header-heading";

const Header = (props) => {
  return (
    <header className="header">
      <MainNavigation />
      <HeaderHeading />
      <HeaderGallery />
    </header>
  );
};

export default Header;
