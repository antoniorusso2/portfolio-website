import { useContext, useEffect, useMemo, useState } from "react";
import ProjectCard from "../components/Cards/ProjectCard";
import axios from "axios";
import LoaderContext from "../contexts/LoaderContext";

const apiUrl = "http://127.0.0.1:8000/api/projects";

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
      return await axios.get(apiUrl + "?limit=" + limit + "&page=" + currentPage);
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    const results = getProjects()
      .then((res) => {
        setProjects(res.data.results.data || []);
        setCurrentPage(res.data.results.current_page);
        const last_page = res.data.results.last_page;
        setPages(Array.from({ length: last_page }, (_, index) => index + 1));
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  return (
    <>
      <div className="container min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-content-around gap-3">
          {projects && projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
        <div className="pagination flex justify-center mt-4">
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
