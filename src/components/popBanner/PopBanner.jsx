import { Link } from "react-router-dom";
import "./popBanner.scss";

export default function PopBanner() {
  return (
    <>
      <div className="popBanner">
        <p className="bannerContent">A la recherche d’une pièce unique ?</p>
        <Link to={"/contact"}>
          {" "}
          <span className="bannerContent"> Contactez-nous </span>
        </Link>
        <p className="bannerContent"> pour une création sur mesure !</p>
      </div>
    </>
  );
}
