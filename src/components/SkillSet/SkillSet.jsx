import TechCarousel from "../Carousel/Technologies/TechCarousel";

function SkillSet() {
    return (
        <div className="skill-set pixel-glow mt-5 p-5 bg-[var(--color-bg-medium)]/70 border-[var(--color-text-primary)] w-full">
            <p className="text-[var(--color-text-primary)] uppercase">
                Skill Set
            </p>

            <TechCarousel />
        </div>
    );
}

export default SkillSet;
