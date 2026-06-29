import ReactDOM from "react-dom/client";
import "./i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Favorites } from "./pages/Favorites/Favorites";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { Details } from "./pages/Details/Details";
import { AuthProvider } from "./contexts/AuthContext";
import { NotFound } from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "Favorites", element: <Favorites /> },
      { path: "About", element: <About /> },
      { path: "songs/:id", element: <Details /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>,
  </AuthProvider>  
);
