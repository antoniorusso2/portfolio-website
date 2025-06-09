import TechCarousel from "../components/Carousel/Technologies/TechCarousel";

export default function MainPAge() {
  return (
    <div className="container mx-auto">
      <div className="row">
        {/* hero section */}
        <section className="main_content">
          <div className="name_description border-1 border-cyan-800 rounded-sm p-3 ">
            <h1 className="name">Antonio Russo</h1>
            <p className="description">Junior Web Developer</p>
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
