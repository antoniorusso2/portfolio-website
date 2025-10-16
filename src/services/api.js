import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export default api;

export const fetchService = {
    getProjects: async (limit = 3, page = 1) => {
        const { data } = await api.get(`/projects?limit=${limit}&page=${page}`);
        return {
            projects: data.results.data,
            totalPages: data.results.last_page,
        };
    },
    getTechnologies: async () => {
        const { data } = await api.get("/technologies");
        return data;
    },
    getProjectDetail: async (slug) => {
        const { data } = await api.get(`/projects/${slug}`);
        return data.results;
    },
};
