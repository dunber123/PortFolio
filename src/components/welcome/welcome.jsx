import React from "react";
import "./welcome.css"; // Assume you will create a CSS file for animations

const WelcomePage = ({ onLoaded }) => {
	// This state will help to control when to remove or hide the welcome page
	const [visible, setVisible] = React.useState(true);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
			onLoaded(); // Notify parent component that loading is done
		}, 55000); // Adjust time for your animation

		return () => clearTimeout(timer);
	}, [onLoaded]);

	return (
		<div className={`welcome-page ${!visible ? "hide" : ""}`}>
			<div className="birds birds--back">
				<div className="bird" />
				<div className="bird" />
				<div className="bird" />
				<div className="bird" />
				{/* Birds that will fly under the text */}
			</div>
			<div>Welcome Stranger</div>
			<div className="birds birds--front">
				<div className="bird" />
				<div className="bird" />
				<div className="bird" />
				<div className="bird" />
				{/* Birds that will fly over the text */}
			</div>
		</div>
	);
};

export default WelcomePage;
