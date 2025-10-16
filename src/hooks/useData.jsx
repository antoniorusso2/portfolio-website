import { useQuery } from "@tanstack/react-query";
import { fetchService } from "../services/api";

export const useProjects = (limit = 3, page = 1) => {
    return useQuery({
        queryKey: ["projects", { limit, page }],
        queryFn: () => {
            return fetchService.getProjects(limit, page);
        },
        keepPreviousData: true, // Prevents flicker between pages
        staleTime: 5 * 60 * 1000, // Optional: cache for 5 minutes
    });
};

export const useTechnologies = () => {
    console.log("use technologies hook loaded");
    return useQuery({
        queryKey: ["technologies"],
        queryFn: () => fetchService.getTechnologies(),
    });
};

export const useProjectDetail = (slug = "") => {
    return useQuery({
        queryKey: ["projectDetail", slug],
        queryFn: () => fetchService.getProjectDetail(slug),
        enabled: !!slug,
    });
};
