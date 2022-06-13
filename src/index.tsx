import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"

import App from "./App";

const rootNode: Element = document.querySelector("#root")!;
createRoot(rootNode).render(
  <StrictMode>
    <App />
  </StrictMode>);