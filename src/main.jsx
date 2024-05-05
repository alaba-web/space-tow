import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { DataContextProvider } from "./contexts/DataContext.jsx";
// import Home from "./pages/Home.jsx";
import Destinations from "./pages/Destinations.jsx";
import Crew from "./pages/Crew.jsx";
import Technology from "./pages/Technology.jsx";

const routers = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/destinations", element: <Destinations /> },
  { path: "/crew", element: <Crew /> },
  { path: "/technology", element: <Technology /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <React.StrictMode>
      <RouterProvider router={routers} />
    </React.StrictMode>
  </DataContextProvider>
);
