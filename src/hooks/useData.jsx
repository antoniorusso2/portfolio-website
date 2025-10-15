import { useQuery } from "@tanstack/react-query";
import { fetchService } from "../services/api";

export const useProjects = (limit = 3, page = 1) => {
    console.log(`🪝 useProjects called with page=${page}, limit=${limit}`);
    return useQuery({
        queryKey: ["projects", page, limit],
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
