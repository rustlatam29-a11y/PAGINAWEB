// src/App.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "../Routes/App-Routes";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Retry after React renders
        const timer = setTimeout(() => {
          const retry = document.getElementById(id);
          if (retry) retry.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToHash />
      <AppRoutes />
    </>
  );
}

export default App;
