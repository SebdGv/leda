import { Link } from "react-router-dom";
import Card from "../../components/cards/Card";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import "./home.scss";

export default function Home() {
  return (
    <>
      <main>
        <section className="slider">
          <div className="sliderContainer">
            <ImageSlider />
            <div className="empty"></div>
            <div className="sliderTextContent">
              <h1 className="title">L&apos;Etable d&apos;Axel</h1>
              <p className="tagLine ">Where Nature Meets Art</p>
              <button className="btnCTA">
                <Link to={"/leda/boutique"}>Shop now</Link>
              </button>
            </div>
          </div>
        </section>
        <section className="nosProduits">
          <h2 className="sectionTitle">Nos produits</h2>
          <div className="cardContainer">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </>
  );
}
