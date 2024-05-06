import "./header.css";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { useData } from "../contexts/DataContext";
import { useState } from "react";

const navLinks = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];
const Header = () => {
  const { openMenu, closeMenu, menu } = useData();
  // const [link, setLink] = useState("");
  const [activeNav, setActiveNav] = useState(0);
  const paths = ["/space-tw", "/destinations", "/crew", "/technology"];

  const handleLink = (indx) => {
    setActiveNav(indx);
  };

  return (
    <header className="header">
      <div>
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
              <Link to={paths[i]}>
                <span>0{i}</span> {nav}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
