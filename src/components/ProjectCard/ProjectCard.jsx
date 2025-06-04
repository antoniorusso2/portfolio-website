import Carousel from "../Carousel/Carousel";

/* eslint-disable react/prop-types */
export default function ProjectCard({ project }) {
  // console.log(project);

  return (
    <div className="card border border-cyan-800 p-2">
      <div className="card-image shadow-lg rounded-sm overflow-hidden max-h-80 max-w-96 flex">
        <Carousel images={project.media} />
      </div>
      <div className="card-content flex flex-col">
        <h3 className="card-title">{project.name}</h3>
        {project.description && <p className="card-description">{project.description}</p>}
      </div>
      <div className="card-tags">
        <ul>
          {project.technologies.map((technology) => (
            <li
              key={technology.id}
              className="px-2 py-1 text-sm rounded-md my-2 max-w-max"
              style={{ backgroundColor: technology.color }}
            >
              <span>{technology.name}</span> <span>{technology.icon}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
