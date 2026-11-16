import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.tsx";
import { ThemeProvider } from "./context/ThemeProvider";

createRoot(document.getElementById("root")!).render(
    <ThemeProvider>
        <RouterProvider router={routes} />
    </ThemeProvider>
);