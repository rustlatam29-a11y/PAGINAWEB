import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load all pages for code splitting
const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));
const Reglas = lazy(() => import("../Pages/Reglas/Reglas"));
const Terms = lazy(() => import("../Pages/Terms/Terms"));
const Privacy = lazy(() => import("../Pages/Privacy/Privacy"));
const DayZ = lazy(() => import("../Pages/DayZ/DayZ"));
const VIPs = lazy(() => import("../Pages/VIPs/VIPs"));
const RPShop = lazy(() => import("../Pages/RPShop/RPShop"));
const RustPirataBrasil = lazy(() => import("../Pages/RustPirataBrasil/RustPirataBrasil"));
const RustPirataArgentina = lazy(() => import("../Pages/RustPirataArgentina/RustPirataArgentina"));
const RustPirataMexico = lazy(() => import("../Pages/RustPirataMexico/RustPirataMexico"));
const RustPirataChile = lazy(() => import("../Pages/RustPirataChile/RustPirataChile"));
const RustPirataColombia = lazy(() => import("../Pages/RustPirataColombia/RustPirataColombia"));
const RustFamily = lazy(() => import("../Pages/RustFamily/RustFamily"));
const ServidoresRustPirata = lazy(() => import("../Pages/ServidoresRustPirata/ServidoresRustPirata"));
const ComunidadRustFamily = lazy(() => import("../Pages/ComunidadRustFamily/ComunidadRustFamily"));
const ServidorRustFamily = lazy(() => import("../Pages/ServidorRustFamily/ServidorRustFamily"));

// Minimal loading fallback
const PageLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    background: '#000'
  }}>
    <div style={{ 
      width: '40px', 
      height: '40px', 
      border: '3px solid #dc2626', 
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reglas" element={<Reglas />} />
        <Route path="/dayz" element={<DayZ />} />
        <Route path="/vip" element={<VIPs />} />
        <Route path="/vips" element={<VIPs />} />
        <Route path="/rp" element={<RPShop />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/rust-pirata-brasil" element={<RustPirataBrasil />} />
        <Route path="/rust-pirata-argentina" element={<RustPirataArgentina />} />
        <Route path="/rust-pirata-mexico" element={<RustPirataMexico />} />
        <Route path="/rust-pirata-chile" element={<RustPirataChile />} />
        <Route path="/rust-pirata-colombia" element={<RustPirataColombia />} />
        <Route path="/rust-family" element={<RustFamily />} />
        <Route path="/servidores-rust-pirata" element={<ServidoresRustPirata />} />
        <Route path="/comunidade-rust-family" element={<ComunidadRustFamily />} />
        <Route path="/servidor-rust-family" element={<ServidorRustFamily />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
