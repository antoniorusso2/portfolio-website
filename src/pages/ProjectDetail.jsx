import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderContext from "../contexts/LoaderContext";
import TechBadge from "../components/ui/TechBadge";

export default function ProjectDetail() {
  const slug = useParams().slug;

  const [project, setProject] = useState({});
  const { setIsLoading } = useContext(LoaderContext);

  const fetchProject = async () => {
    try {
      setIsLoading(true);
      await axios.get("http://127.0.0.1:8000/api/projects/" + slug).then((res) => {
        setProject(res.data.results);
        console.log(res.data);
        setIsLoading(false);
      });
    } catch (error) {
      setProject({});
      return console.error(error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <div className="container mt-16">
      <h1 className="text-3xl underline text-color-[var(--primary-color)]">{project.name}</h1>

      <div className="tech-stack flex gap-3">
        {project.technologies?.map((technology) => (
          <TechBadge key={technology.id} technology={technology} />
        ))}
      </div>
    </div>
  );
}
