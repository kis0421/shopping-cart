import { StrictMode } from "react";
import { createRoot } from "react-dom/client"

import App from "./App";

const rootNode = document.querySelector("#root");
if (!rootNode) {
  throw new Error("root element not found");
}
createRoot(rootNode).render(
  <StrictMode>
    <App />
  </StrictMode>);