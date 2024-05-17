import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper/modules"; // Importation correcte des modules
import { Swiper, SwiperSlide } from "swiper/react";
import "./imageSlider.scss";

export default function ImageSlider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={false}
      pagination={{ clickable: true }}
      navigation={true} // Utilisation correcte du module de navigation
      autoplay={{ delay: 6000 }}
      modules={[Navigation, Pagination, Autoplay, EffectCube]} // Inclusion des modules nécessaires
    >
      <SwiperSlide>
        <img
          className="imageSlider"
          src={`${import.meta.env.BASE_URL}src/assets/echiquier.jpg`}
          alt="Image 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="imageSlider"
          src={`${import.meta.env.BASE_URL}/src/assets/horlogeVerte.jpg`}
          alt="Image 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="imageSlider"
          src={`${import.meta.env.BASE_URL}src/assets/echiquier.jpg`}
          alt="Image 3"
        />
      </SwiperSlide>
    </Swiper>
  );
}
