import { useEffect, useState } from "react";
import ProjectCard from "../components/Cards/ProjectCard";
import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api/projects";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await axios.get(apiUrl);

      setProjects(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-content-around gap-3 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
    // console.log(projects)
  );
}
