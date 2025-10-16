import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import NotFound from "./layout/NotFound/NotFound";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route index path="/" element={<MainPage />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route
                            path="/projects/:slug"
                            element={<ProjectDetail />}
                        />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
