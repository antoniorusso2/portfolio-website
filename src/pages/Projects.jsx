import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api/projects";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await axios.get(apiUrl);
      // setProjects(response.data);
      // console.log(response.data.results);
      setProjects(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
