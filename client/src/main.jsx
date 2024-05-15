import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ipn from "./pages/Ipn";
import Uam from "./pages/Uam";
import Unam from "./pages/Unam";
import { UniversitysProvider } from "./context/UniversityContext";
import { AnimatePresence } from "framer-motion";
import Universitys from "./pages/Universitys";
import University from "./pages/University";
import About from "./pages/About";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UniversitysProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ipn" element={<Ipn />} />
              <Route path="/Unam" element={<Unam />} />
              <Route path="/Uam" element={<Uam />} />
              <Route path="/ipn/:id" element={<Ipn />} />
              <Route path="/Unam/:id" element={<Unam />} />
              <Route path="/Uam/:id" element={<Uam />} />
              <Route path="/universidades" element={<Universitys />} />
              <Route path="/facultad/:id" element={<University />} />
              <Route path="/nosotros" element={<About />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </ThemeProvider>
    </UniversitysProvider>
  </React.StrictMode>
);
