import "./header.css";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { useData } from "../contexts/DataContext";

const navLinks = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];
const Header = () => {
  const { openMenu, closeMenu, menu, activeNav, setActiveNav } = useData();

  const paths = ["/", "/destinations", "/crew", "/technology"];

  const handleLink = (indx) => {
    setActiveNav(indx);
    closeMenu();
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => setActiveNav(0)}>
        <img src={logo} alt="logo" />
      </div>{" "}
      <div className="line"></div>
      <nav className="nav">
        <img src={hamburger} alt="hamburger" onClick={openMenu} />
        <ul className={!menu ? "nav-list" : "menu-active nav-list"}>
          <div>
            <img src={close} alt="cancel" onClick={closeMenu} />
          </div>

          {navLinks.map((nav, i) => (
            <li
              key={i}
              onClick={() => handleLink(i)}
              className={i === activeNav ? "active-nav" : ""}
            >
              <span>0{i}</span> {nav}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
