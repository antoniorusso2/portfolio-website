import TechCarousel from "../components/Carousel/Technologies/TechCarousel";
import Projects from "../pages/Projects";

export default function MainPAge() {
  return (
    <div className="container mx-auto grow">
      {/* hero section */}
      <section className="main_content my-5">
        <div className="name_description rounded-sm p-5 bg-[var(--secondary-color)] shadow-[0_0_10px var(--slated-secondary) ]">
          <h1 className="name text-[var(--text-color)] text-5xl mb-5 uppercase">Antonio Russo</h1>
          <p className="description text-[var(--slated-secondary)] text-2xl">
            Junior Web Developer alla ricerca di una posizione stabile che mi permetta di migliorare le mie capacità ed
            acquisirne di nuove. Sono disponibile all&apos;apprendimento di altri linguaggi di programmazione e a
            seguire corsi di aggiornamento. Il mio obiettivo ﬁnale è quello di diventare uno sviluppatore afﬁdabile ed
            autonomo a 360 gradi.
          </p>
        </div>
      </section>
      <section className="tech-stack">
        <TechCarousel />
      </section>
      {/* <section className="projects">
        <Projects />
      </section> */}
    </div>
  );
}
