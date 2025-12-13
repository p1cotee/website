import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import McSitting from "./components/McSitting";
import MainText from './components/MainText';

/* pages */
import AboutMe from './pages/about-me'

function App() {
  const location = useLocation();
  const hideOnPages = ['/about-me', '/projects', '/work', '/links'];
  const showMcSitting = !hideOnPages.includes(location.pathname);
  const showMainText = !hideOnPages.includes(location.pathname);

  return (
    <div>
      <Navigation />
      {showMcSitting && <McSitting />}
      {showMainText && <MainText />}

      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/work" element={<div>Work Page</div>} />
        <Route path="/links" element={<div>Links Page</div>} />
      </Routes>
    </div>
  );
}

export default App;