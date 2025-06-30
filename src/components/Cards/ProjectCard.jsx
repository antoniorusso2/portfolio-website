import TechBadge from "../ui/TechBadge";

/* eslint-disable react/prop-types */
export default function ProjectCard({ project }) {
  // console.log("render card");

  return (
    <div className="project-card border-2 rounded-sm border-cyan-800 p-4">
      <div className="card__header">
        <img
          className="object-cover object-center max-w-full"
          src={"placeholder-600-400.png"}
          onError={(e) => (e.target.src = "placeholder-600-400.png")}
          alt={project.name}
        />
      </div>
      {/* <h2 className="project__name text-emerald-500 text-xl">{project.name}</h2> */}

      <a className="project__link text-emerald-500" href={`/projects/${project.slug}`}>
        {project.name}
      </a>

      <div className="tech-badges flex gap-1 flex-wrap">
        {project.technologies.map((technology) => (
          <TechBadge key={technology.id} technology={technology} />
        ))}
      </div>
    </div>
  );
}
