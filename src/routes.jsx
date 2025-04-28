// src/routes.jsx
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  },
  {
    path: "*",
    element: (
    <>
      <NavBar />
      <h1>404 Not Found</h1>
      <p>Oops! Looks like something went wrong.</p>
    </>
  )
  }
];

export default routes;