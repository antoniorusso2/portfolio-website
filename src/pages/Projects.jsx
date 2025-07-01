import { useContext, useEffect, useState } from "react";
import ProjectCard from "../components/Cards/ProjectCard";
import axios from "axios";
import LoaderContext from "../contexts/LoaderContext";

const apiUrl = import.meta.env.VITE_API_BASE_URL + "projects";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [pages, setPages] = useState([]);

  const { setIsLoading } = useContext(LoaderContext);

  const limit = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getProjects = async () => {
    try {
      setIsLoading(true);
      await axios.get(apiUrl + "?limit=" + limit + "&page=" + currentPage).then((res) => {
        setProjects(res.data.results.data || []);
        setCurrentPage(res.data.results.current_page);
        const last_page = res.data.results.last_page;
        setPages(Array.from({ length: last_page }, (_, index) => index + 1));
        setIsLoading(false);
      });
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, [currentPage]);

  return (
    <>
      <div className="container flex flex-col justify-content-between h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-content-around gap-3">
          {projects && projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>

        <div className="pagination flex justify-center mt-auto">
          {pages &&
            pages.map((page) => (
              <button
                key={page}
                className={`px-4 py-2 mx-1 rounded border cursor-pointer ${
                  page === currentPage ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
        </div>
      </div>
    </>
  );
}
