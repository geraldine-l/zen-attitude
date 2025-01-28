import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement); 
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("L'élément avec l'ID 'root' est introuvable dans le HTML");
}

