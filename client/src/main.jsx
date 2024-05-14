import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ipn from "./pages/Ipn";
import Uam from "./pages/Uam";
import Unam from "./pages/Unam";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipn" element={<Ipn />} />
          <Route path="/Unam" element={<Unam />} />
          <Route path="/Uam" element={<Uam />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
