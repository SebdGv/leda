import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const navRef = useRef();
  const toggleMenu = () => {
    setOpenMenu(!isOpenMenu);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(false); // Ferme le menu si le clic est en dehors du nav
      }
    };

    // Ajoute l'écouteur d'événements au document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Nettoyage de l'écouteur
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <header>
        <div className="header">
          <nav className="navBar" ref={navRef}>
            <div className="navContainer">
              <ul className={isOpenMenu ? "" : "hidden"}>
                <li>
                  <Link to={"/"}>Accueil</Link>
                </li>
                <li>
                  <Link to={"/"}>Shop</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/"}>A propos</Link>
                </li>
              </ul>
              <div className="burger" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className="faBars fa" />
              </div>
            </div>
            <div className="logoContainer">
              <div className="logo">
                <Link to={"/"}>
                  <img src="./src/assets/logo.png" alt="" className="logo" />
                </Link>
              </div>
            </div>

            <button className="cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="faCartShopping fa"
              />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
