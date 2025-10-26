// import React from "react";
// import ReactDOM from "react-dom/client";
// import { DemoNavBars } from "../components/Nav"; // importa alguno de tus componentes

// export default function App() {
//   return <DemoNavBars />;
// }
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// componentes
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import AgendarCita from "./pages/AgendarCita";
import NotFound from "./pages/NotFound";

/* ========== Root App Component ========== */
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main style={{ padding: "1rem" }}>
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/agendar-cita" element={<AgendarCita />} />

          {/* Redirección y 404 */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
