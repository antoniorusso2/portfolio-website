import TechCarousel from "../Carousel/Technologies/TechCarousel";

function SkillSet() {
    return (
        <div className="skill-set pixel-glow w-full text-center">
            <p className="text-[var(--color-text-primary)] uppercase text-2xl md:text-3xl mb-5 font-bold">
                Linguaggi e Framework
            </p>

            <TechCarousel />
        </div>
    );
}

export default SkillSet;
