import ScrollVelocity from "../components/Carousel/Carousel";

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
            <ScrollVelocity velocity={5} texts={["HTML", "CSS", "JavaScript", "React", "Tailwind"]} />
          </div>
        </section>
      </div>
    </div>
  );
}
