import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderContext from "../contexts/LoaderContext";
import TechBadge from "../components/ui/TechBadge";
import MediaCarousel from "../components/Carousel/Media/MediaCarousel";

export default function ProjectDetail() {
  const slug = useParams().slug;

  const [project, setProject] = useState({});
  const { setIsLoading } = useContext(LoaderContext);

  const fetchProject = async () => {
    try {
      setIsLoading(true);
      await axios.get(import.meta.env.VITE_API_BASE_URL + "projects/" + slug).then((res) => {
        console.log(res.data);
        setProject(res.data.results);
        // console.log(res.data);
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

  if (!project) {
    return (
      <div className="container mx-auto px-4 max-w-4xl py-10 text-center text-red-500">
        Progetto non trovato o si è verificato un errore nel caricamento.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      {/* Carousel */}
      {project.media && <MediaCarousel mediaList={project.media} />}

      {/* Titolo e Cliente */}
      <h1 className=" md:text-2xl font-bold text-[var(--text-color)] capitalize">{project.name}</h1>
      {project.client && <p className="text-gray-500 mb-3">Cliente: {project.client}</p>}

      {/* Tipologia */}
      {project.type && (
        <div className="my-5">
          <span className="inline-block bg-cyan-100 text-cyan-800 text-sm px-3 py-1 rounded-full">
            {project.type.name}
          </span>
        </div>
      )}

      {/* Descrizione */}
      <div className="mb-6">
        <p className="text-gray-200 leading-relaxed">{project.description}</p>
      </div>

      {/* Tecnologie */}
      {project.technologies?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech.id} technology={tech} />
          ))}
        </div>
      )}
    </div>
  );
}
