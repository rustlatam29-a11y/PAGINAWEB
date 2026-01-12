// src/App.tsx
import { useState, useEffect } from "react";
import AppRoutes from "../Routes/App-Routes";
import Loader from "../Hooks/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carga de datos o espera inicial
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 1 segundo de ejemplo

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Mostrar loader mientras carga
      ) : (
        <AppRoutes /> // Mostrar rutas cuando termina de cargar
      )}
    </>
  );
}

export default App;
