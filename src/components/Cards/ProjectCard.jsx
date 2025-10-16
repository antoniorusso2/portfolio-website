import { useNavigate } from "react-router-dom";
import TechBadge from "../ui/TechBadge";

/* eslint-disable react/prop-types */
export default function ProjectCard({ project }) {
    const baseUrl = import.meta.env.VITE_API_STORAGE_URL;
    const hasMedia = Array.isArray(project.media) && project.media.length > 0;
    const navigate = useNavigate();

    const imgUrl = hasMedia
        ? `${baseUrl}${project.media[0].url}`
        : "/placeholder-600-400.png";

    function handleClick() {
        window.scrollTo(0, 0);
        navigate(`/projects/${project.slug}`);
    }

    return (
        <div className="project-card w-full h-96 bg-(--color-bg-medium) border border-(--color-bg-medium) hover:border-(--color-accent-blue) hover:border-2 rounded overflow-hidden flex flex-col hover:translate-y-[-5px] transition-transform duration-300 ease-in-out">
            {/* Image header */}
            <div
                className="card__header w-full md:max-h-96 overflow-hidden"
                onClick={handleClick}
            >
                <img
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
                    onError={(e) => (e.target.src = "placeholder-600-400.png")}
                    alt={project.name}
                    src={imgUrl}
                />
            </div>

            {/* Body */}
            <div className="card__body flex flex-col justify-between flex-1 p-4">
                {/* Project link */}
                <a
                    className="project__link text-xl md:text-2xl font-bold underline underline-offset-4 hover:text-(--color-accent-blue) transition-colors duration-300 ease-in-out mb-3 capitalize"
                    href={`/projects/${project.slug}`}
                >
                    {project.name}
                </a>

                {/* Technologies */}
                <div className="tech_badges flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((technology) => (
                        <TechBadge
                            key={technology.id}
                            technology={technology}
                            className=""
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
