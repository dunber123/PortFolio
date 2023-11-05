import React from "react";
import useTypewriter from "react-typewriter-hook";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Minci.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
	const [magicName, setMagicName] = React.useState("Emina Merdzo");
	const [magicTitle, setMagicTitle] = React.useState("");
	const [isNameTyped, setIsNameTyped] = React.useState(false);

	const typewrittenName = useTypewriter(magicName);
	const typewrittenTitle = useTypewriter(magicTitle);

	React.useEffect(() => {
		if (typewrittenName === magicName) {
			// Once the name is fully typed out, we wait for 2 seconds before setting the title
			setTimeout(() => {
				setIsNameTyped(true);
			}, 2000); // 2000 milliseconds = 2 seconds
		}
	}, [typewrittenName, magicName]);

	React.useEffect(() => {
		// When isNameTyped becomes true, we set the title
		if (isNameTyped) {
			setMagicTitle("Embryologist");
		}
	}, [isNameTyped]);

	return (
		<header>
			<div className="container header__container">
				<h4>Hello I'm</h4>
				<h1>{typewrittenName}</h1>
				{isNameTyped && <h4 className="text-light">{typewrittenTitle}</h4>}
				<CTA />
				<HeaderSocial />

				<div className="me">
					<img src={ME} alt="me" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
