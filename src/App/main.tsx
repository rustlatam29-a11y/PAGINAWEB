import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../Css/index.css";
import App from "../App/App";
import { BrowserRouter } from "react-router-dom";
import { CurrencyProvider } from "../context/CurrencyContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </BrowserRouter>
  </StrictMode>
);
