import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./layouts/Layout";
import ProjectsView from "./layouts/ProjectsView";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Project from "./components/Projects/Project";

function Router() {
  const location = useLocation();
  return (
    <div className="bg-primary overflow-x-hidden h-screen w-screen">
        <Routes location={location}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsView />}>
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:project" element={<Project />} />
            </Route>
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
