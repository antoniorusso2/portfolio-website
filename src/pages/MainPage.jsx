import TechCarousel from "../components/Carousel/Technologies/TechCarousel";
import SkillSet from "../components/SkillSet/SkillSet";

export default function MainPAge() {
    return (
        <>
            <section className="main-content grow flex flex-col items-center justify-content-between h-full">
                <div className="container">
                    {/* hero section */}
                    <div className="main_content pixel-glow bg-[var(--color-bg-medium)]/70 shadow-[0_0_10px var(--color-accent-neon)] ">
                        <div className="name_description  p-5">
                            <h1 className="name text-[var(--color-text-primary)] text-xl md:text-3xl mb-3 uppercase">
                                Antonio Russo
                            </h1>
                            {/* description */}
                            <p className="description text-[var(--color-text-secondary)] md:text-2xl">
                                Web Developer
                            </p>

                            <TechCarousel />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <SkillSet />
                </div>
            </section>
        </>
    );
}
