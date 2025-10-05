import { useEffect, useState } from "react";
import "./techcarousel.css";
// import CarouselItem from "./CarouselItem";
import axios from "axios";

export default function AutoplayCarousel() {
    const [technologies, setTechnologies] = useState([]);

    async function fetchTechnologies() {
        try {
            const response = await axios.get(
                import.meta.env.VITE_API_BASE_URL + "technologies",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            // console.log(response.data.results);
            setTechnologies(response.data.results);
        } catch (error) {
            console.error(error);
            setTechnologies([]);
            // console.error(error);
        }
    }

    useEffect(() => {
        fetchTechnologies();
    }, []);

    return (
        technologies?.length > 0 && (
            <div className="carousel_wrapper overflow-hidden w-full bg-[var(--secondary-color)] rounded-lg border-double border-8 border-[var(--red-dark)]">
                <div className="carousel">
                    {[...technologies, ...technologies].map(
                        (technology, idx) => (
                            <div key={idx} className="carousel-item">
                                <img
                                    src={technology.icon_external_url}
                                    alt="tech-icon"
                                />
                            </div>
                        )
                    )}
                    {[...technologies, ...technologies].map(
                        (technology, idx) => (
                            <div key={idx} className="carousel-item">
                                <img
                                    src={technology.icon_external_url}
                                    alt="tech-icon"
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        )
    );
}
