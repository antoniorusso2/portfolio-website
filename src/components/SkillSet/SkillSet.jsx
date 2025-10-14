function SkillSet({ skills = [] }) {
    return (
        <div className="skill-set pixel-glow mt-5 p-5 bg-[var(--color-bg-medium)]/70 border-[var(--color-text-primary)] w-full">
            <p className="text-[var(--color-text-primary)] uppercase">
                Skill Set
            </p>

            <ul>
                {skills.length > 0 &&
                    skills.map((skill) => (
                        <li className="flex w-full items-center" key={skill.id}>
                            <span className="basis-1/3">{skill.name}</span>
                            {/* proggressBar */}
                            <div className="progress-bar basis-1/4 bg-(--color-bg-medium) border border-[var(--color-accent-violet)]">
                                <div
                                    className="progress-bar-fill h-2 bg-cyan-500"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default SkillSet;
