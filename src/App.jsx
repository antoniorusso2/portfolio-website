import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/defaultLayout';
import NotFound from './layout/notFound';
import MainPAge from './pages/MainPage';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index path="home" element={<MainPAge />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
