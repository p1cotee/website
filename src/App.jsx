import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navigation from "./navigation";
import McSitting from "./components/McSitting";
import MainText from './components/MainText';

/* pages */
import AboutMe from './pages/about-me';
import Projects from './pages/projects';
import Work from './pages/work';
import Links from './links';

function App() {
  const location = useLocation();
  const hideOnPages = ['/about-me', '/projects', '/work'];
  const showMcSitting = !hideOnPages.includes(location.pathname);
  const showMainText = !hideOnPages.includes(location.pathname);
  const showLinks = hideOnPages.includes(location.pathname);

  return (
    <div>
      <Navigation />
      {showMcSitting && <McSitting />}
      {showMainText && <MainText />}
      {showLinks && <Links />}

      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<div><Projects /></div>} />
        <Route path="/work" element={<div><Work /></div>} />
      </Routes>
    </div>
  );
}

export default App;