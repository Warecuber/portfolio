import { React } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./ui/NavBar";

// Import pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import FavoriteResources from "./pages/FavoriteResources";

console.log(`Version ${process.env.REACT_APP_VERSION || "Unknown"}`);

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/favorite_resources" exact component={FavoriteResources} />
    </Router>
  );
};

export default AppRouter;
