// import React from "react";
// import ReactDOM from "react-dom/client";
// import { DemoNavBars } from "../components/Nav"; // importa alguno de tus componentes

// export default function App() {
//   return <DemoNavBars />;
// }
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// componentes
import HomePage from "./pages/HomePage";

/* ========== Root App Component ========== */
export default function App() {
  return (
    <BrowserRouter>
      <main style={{ padding: "1rem" }}>
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<HomePage />} />

          {/* Redirección y 404 */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
