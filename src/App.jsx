import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoaderContext from "./contexts/LoaderContext";
import DefaultLayout from "./layout/DefaultLayout";
import NotFound from "./layout/NotFound/NotFound";
import MainPAge from "./pages/MainPage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useState } from "react";
import Loader from "./components/ui/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BrowserRouter>
      {isLoading && <Loader />}
      <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<MainPAge />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoaderContext.Provider>
    </BrowserRouter>
  );
}

export default App;
