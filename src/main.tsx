import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Approuter } from "./router";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Approuter />
    </StrictMode>
);
