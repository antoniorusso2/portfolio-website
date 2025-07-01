import TechBadge from "../ui/TechBadge";

/* eslint-disable react/prop-types */
export default function ProjectCard({ project }) {
  const imgUrl = project.media[0]?.url
    ? import.meta.env.VITE_API_STORAGE_URL + `${project.media[0]?.url}`
    : "placeholder-600-400.png";

  console.log(project, imgUrl);
  return (
    <div className="project-card w-full border-2 rounded-sm border-cyan-800 p-4 flex flex-col">
      <div className="card__header ">
        <img
          className="object-cover object-center max-w-full"
          src={imgUrl}
          onError={(e) => (e.target.src = "placeholder-600-400.png")}
          alt={project.name}
        />
      </div>
      {/* <h2 className="project__name text-emerald-500 text-xl">{project.name}</h2> */}

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
