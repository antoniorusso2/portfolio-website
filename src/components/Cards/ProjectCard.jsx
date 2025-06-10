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
      <h2 className="project__name text-emerald-500 text-xl">{project.name}</h2>

      <div className="tech-badges flex gap-1 flex-wrap">
        {project.technologies.map((technology) => (
          <span
            className="badge text-sm py-0.5 px-1 rounded-xs"
            style={{ backgroundColor: technology.color }}
            key={technology.id}
          >
            {technology.name}
          </span>
        ))}
      </div>
    </div>
  );
}
