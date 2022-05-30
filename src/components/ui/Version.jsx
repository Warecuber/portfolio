import { React } from "react";

const Version = () => {
	return (
		<div className="version">
			Version {process.env.REACT_APP_VERSION || "Unknown"}
		</div>
	);
};

export default Version;
