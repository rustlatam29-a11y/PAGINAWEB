import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../Css/index.css";
import App from "../App/App";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "../context/LanguageContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
