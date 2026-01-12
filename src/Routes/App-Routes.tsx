import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage"; // ejemplo
import NotFound from "../Pages/NotFound/NotFound"; // página de error 404
import Reglas  from "../Pages/Reglas/Reglas";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/reglas" element={<Reglas />} />
    </Routes>
  );
}

export default AppRoutes;
