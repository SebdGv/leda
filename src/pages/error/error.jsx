/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./error.scss";

export default function Error() {
  return (
    <>
      <div className="notFound">
        <p className="err404">404</p>
        <p className="errText">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="backHome">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </>
  );
}
