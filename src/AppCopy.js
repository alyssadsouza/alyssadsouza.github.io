import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function Router() {
  const location = useLocation();
  return (
    <div className="bg-primary overflow-x-hidden h-screen w-screen">
        <Routes location={location}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
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
