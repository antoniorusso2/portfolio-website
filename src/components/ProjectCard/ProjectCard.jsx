/* eslint-disable react/prop-types */
export default function ProjectCard({ project }) {
  console.log(project);
  const imgUrl = "http://127.0.0.1:8000/storage/" + project.image;

  console.log(imgUrl);

  return (
    <div className="card">
      <div className="card-image">
        <img src={imgUrl} alt="Project Image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
      </div>
    </div>
  );
}
