import { createBrowserRouter } from "react-router-dom";

// Import the components for each route
import Home from "./components/Home";
import Directors from "./components/Directors";
import Actors from "./components/Actors";
import Movie from "./components/Movie";


const routes =createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
   
  ]);

export default routes;