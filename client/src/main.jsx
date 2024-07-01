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
<<<<<<< HEAD
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { ProfilePage } from "./pages/ProfilePage";
import { RegisterPage } from "./pages/RegisterPage";
=======
>>>>>>> 554a9d862430e50c897d93df8ada1ed63b446b2f

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UniversitysProvider>
<<<<<<< HEAD
      <AuthProvider>
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
                <Route path="/nosotros" element={<About />} />{" "}
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/profile/:id" element={<ProfilePage />} />
                </Route>
              </Routes>
            </AnimatePresence>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
=======
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
>>>>>>> 554a9d862430e50c897d93df8ada1ed63b446b2f
    </UniversitysProvider>
  </React.StrictMode>
);
