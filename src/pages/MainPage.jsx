import TechCarousel from "../components/Carousel/Technologies/TechCarousel";

export default function MainPAge() {
  return (
    <div className="container mx-auto">
      <div className="row">
        {/* hero section */}
        <section className="hero-section">
          <div className="hero">
            <h1 className="hero-title">Antonio Russo</h1>
            <p className="hero-subtitle">Junior Web Developer</p>
          </div>
        </section>

        <section className="tech-stack">
          <div className="container">
            <TechCarousel />
          </div>
        </section>
      </div>
    </div>
  );
}
