import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";

// const images = ["/icons/js.png", "/icons/php.png", "/icons/html.png", "/icons/css.png"];
const images = [
  "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
];

export default function TechCarousel() {
  const [technologies, setTechnologies] = useState([]);

  async function fetchTechnologies() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/technologies");
      console.log(response.data.results);
      setTechnologies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  return (
    <Slider {...settings}>
      {technologies.map((technology, idx) => (
        <div key={idx}>
          <img src={technology.icon} alt={`img-${idx}`} className="w-full h-24 object-contain" />
        </div>
      ))}
    </Slider>
    // console.log(technologies)
  );
}
