import MainNavigation from "../navigation/main-navigation";
import HeaderHeading from "./header-heading";

import { useElementOnScreen } from "../../../hooks/use-elements-on-screen";

const Header = (props) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "600px",
    threshold: 0,
  });

  return (
    <header className="header">
      <MainNavigation isVisible={isVisible} />
      <HeaderHeading containerRef={containerRef} />      
    </header>
  );
};

export default Header;
