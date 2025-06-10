import { useRef } from "react";
import TechCarousel from "../components/Carousel/Technologies/TechCarousel";
import Projects from "../pages/Projects";
import NextPage from "../components/ui/buttons/NextPage";

export default function MainPAge() {
  const mainSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);

  const sections = [mainSectionRef, projectsSectionRef];

  const handleScrollToNext = (index) => {
    const nextSection = sections[index + 1];

    if (nextSection?.current) {
      nextSection.current.scrollIntoView({ behavior: "smooth" });
    } else {
      sections[0].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        ref={mainSectionRef}
        className="main-content bg-[var(--bg-color)] grow h-screen flex flex-col items-center justify-content-between py-20"
      >
        <div className="container">
          {/* hero section */}
          <div className="main_content border-double rounded-xl border-8 border-[var(--red-dark)] bg-[var(--primary-color)]">
            <div className="name_description rounded-sm p-5 bg-[var(--secondary-color)] shadow-[0_0_10px var(--slated-secondary) ]">
              <h1 className="name text-[var(--text-color)] text-3xl mb-3 uppercase">Antonio Russo</h1>
              {/* description */}
              <p className="description text-[var(--slated-secondary)] text-2xl">
                Junior Web Developer alla ricerca di una posizione stabile che mi permetta di migliorare le mie capacità
                ed acquisirne di nuove. Sono disponibile all&apos;apprendimento di altri linguaggi di programmazione e a
                seguire corsi di aggiornamento. Il mio obiettivo ﬁnale è quello di diventare uno sviluppatore afﬁdabile
                ed autonomo a 360 gradi.
              </p>
            </div>
          </div>
        </div>
        <div className="container my-auto">
          <TechCarousel />
        </div>
        <NextPage onclick={() => handleScrollToNext(0)} />
      </section>

      <section ref={projectsSectionRef} className="projects py-20 bg-[var(--secondary-color)]">
        <Projects />
      </section>
    </>
  );
}
