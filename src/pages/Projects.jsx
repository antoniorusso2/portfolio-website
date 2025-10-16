import { useState } from "react";
import ProjectCard from "../components/Cards/ProjectCard";
import Loader from "../components/ui/Loader";

import { useProjects } from "../hooks/useData";

export default function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 4;

    const { data, isLoading, isError, isFetching } = useProjects(
        limit,
        currentPage
    );

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <p>{isError.message}</p>;
    }

    const projects = data.projects;

    const pages = Array.from(
        { length: data.totalPages },
        (_, index) => index + 1
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="container flex flex-col justify-content-between h-full mb-5">
                {isFetching && <Loader />}
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-content-around gap-3">
                    {projects &&
                        projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                </div>

                <div className="pagination flex justify-center mt-auto">
                    {pages &&
                        pages.map((page) => (
                            <button
                                key={page}
                                className={`px-4 py-2 mx-1 rounded border cursor-pointer ${
                                    page === currentPage
                                        ? "bg-blue-500 text-white"
                                        : ""
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
