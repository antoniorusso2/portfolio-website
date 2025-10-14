import TechBadge from "../ui/TechBadge";

/* eslint-disable react/prop-types */
export default function ProjectCard({ project }) {
    const imgUrl = project.media[0]?.url
        ? import.meta.env.VITE_API_STORAGE_URL + `${project.media[0]?.url}`
        : "placeholder-600-400.png";

    return (
        <div className="project-card w-full h-96 bg-(--color-bg-medium)/70 shadow-(--card-shadow) border-(--color-text-primary) p-4 flex flex-col">
            <div className="card__header overflow-hidden">
                <img
                    src={imgUrl}
                    onError={(e) => (e.target.src = "placeholder-600-400.png")}
                    alt={project.name}
                />
            </div>
            <a
                className="project__link text-emerald-500 md:text-2xl underline underline-offset-4 my-3"
                href={`/projects/${project.slug}`}
            >
                {project.name}
            </a>

            <div className="tech-badges flex gap-1 flex-wrap mt-auto">
                {project.technologies.map((technology) => (
                    <TechBadge key={technology.id} technology={technology} />
                ))}
            </div>
        </div>
    );
}
