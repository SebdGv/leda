import { Link } from "react-router-dom";
import "./card.scss";

export default function Card() {
  return (
    <>
      <div className="card">
        <Link to={`/boutique/id`}>
          <img
            src={`${import.meta.env.BASE_URL}assets/horlogeVerte.jpg`}
            alt="photographie du produit"
          />
          <div className="cardContent">
            <h3 className="cardTitle">Nom du produit</h3>
            <p className="cardDescrition">Description courte</p>
            <p className="price">100.00€</p>
          </div>
        </Link>
      </div>
    </>
  );
}
