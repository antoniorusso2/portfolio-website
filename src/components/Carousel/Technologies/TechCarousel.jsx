import { useEffect, useState } from "react";
import "./techcarousel.css";
// import CarouselItem from "./CarouselItem";
import axios from "axios";

export default function AutoplayCarousel() {
  const [technologies, setTechnologies] = useState([]);

  async function fetchTechnologies() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/technologies");
      // console.log(response.data.results);
      setTechnologies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTechnologies();
  }, []);
  return (
    <div className="carousel_wrapper overflow-hidden w-full bg-[var(--secondary-color)] rounded-lg border-double border-8 border-[var(--red-dark)]">
      <div className="carousel">
        {/* Duplicate for seamless looping */}
        {[...technologies, ...technologies].map((technology, idx) => (
          <div key={idx} className="carousel-item">
            <img src={technology.icon_url} alt="tech-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}
