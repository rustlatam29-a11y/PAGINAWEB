import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage"; // ejemplo
import NotFound from "../Pages/NotFound/NotFound"; // página de error 404
import Reglas  from "../Pages/Reglas/Reglas";
import Terms from "../Pages/Terms/Terms";
import Privacy from "../Pages/Privacy/Privacy";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reglas" element={<Reglas />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
