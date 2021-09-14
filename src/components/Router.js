import { React } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./ui/NavBar";

// Import pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const AppRouter = () => {
	return (
		<Router>
			<NavBar />
			<Route path="/" exact component={Home} />
			<Route path="/projects" component={Projects} />
		</Router>
	);
};

export default AppRouter;
