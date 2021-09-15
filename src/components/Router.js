import { React } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./ui/NavBar";

// Import pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";

const AppRouter = () => {
	return (
		<Router>
			<NavBar />
			<Route path="/" exact component={Home} />
			<Route path="/projects" exact component={Projects} />
			<Route path="/education" exact component={Education} />
		</Router>
	);
};

export default AppRouter;
