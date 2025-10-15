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
        return await data.results;
    },
    getTechnologies: async () => {
        const { data } = await api.get("/technologies");
        return data;
    },
};
