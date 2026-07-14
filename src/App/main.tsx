import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../Css/index.css";
import App from "../App/App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "../Context/LanguageContext";
import { AuthProvider } from "../Context/AuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
