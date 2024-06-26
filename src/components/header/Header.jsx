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
  const closeMenu = () => {
    setOpenMenu(false); // Ferme le menu
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu(); // Ferme le menu si le clic est en dehors du nav
      }
    };

    // Ajoute l'écouteur d'événements au document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Nettoyage de l'écouteur
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (isOpenMenu) {
      document.body.classList.add("no-scroll"); // Ajoute la classe pour empêcher le défilement
    } else {
      document.body.classList.remove("no-scroll"); // Supprime la classe pour réactiver le défilement
    }
  }, [isOpenMenu]);

  return (
    <>
      <header>
        <div className="header">
          <nav className="navBar" ref={navRef}>
            <div className="navContainer">
              <ul className={isOpenMenu ? "" : "hidden"} onClick={closeMenu}>
                <li>
                  <Link to={"/leda/"}>Accueil</Link>
                </li>
                <li>
                  <Link to={"/leda/"}>Shop</Link>
                </li>
                <li>
                  <Link to={"/leda/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/leda/"}>A propos</Link>
                </li>
                <li>
                  <Link to={"/leda/login/"}>LogIn</Link>
                </li>
              </ul>
              <div className="burger" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className="faBars fa" />
              </div>
            </div>
            <div className="logoContainer">
              <div className="logo">
                <Link to={"/leda"}>
                  <img
                    src={`${import.meta.env.BASE_URL}assets/logo.png`}
                    alt=""
                    className="logo"
                  />
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
