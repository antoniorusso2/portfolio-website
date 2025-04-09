export default function ProjectCard(project) {
  return (
    <div className="card">
      <div className="card-image">
        <img src="https://via.placeholder.com/150" alt="Project Image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
      </div>
    </div>
  );
}
