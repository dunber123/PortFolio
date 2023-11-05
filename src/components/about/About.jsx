import React from "react";
import "./about.css";
import ME from "../../assets/bosnia.png";

const About = () => {
	return (
		<section id="about">
			<h5 className="text-glow">Get To Know</h5> {/* Add the text-glow class */}
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About Image" className="butterfly" /> {/* Add the butterfly class */}
					</div>
				</div>

				<div className="about__content">
					<p>
						I'm from a small country called Bosnia, but I was born in Chicago IL, the windy city. I moved to Chattanooga TN not long after, and have been living here ever since. 
            
           <p></p> I graduated from a University with a Biology Degree, and somehow found myself working as an Embryologist. 
            <p>
            </p>A few things about me is that I like to read, play games, and
						get blackout drunk in Ohio.
					</p>

					{/* Add the new section for the favorite items */}
					<div className="about__favorites">
						<div className="about__card">
							<div className="about__card-header">
								<h3>Favorite Colors</h3>
							</div>
							<div className="about__card-content">
								<ul>
									<li>Pink</li>
									<li>Yellow</li>
								</ul>
							</div>
						</div>

						{/* Favorite Books */}
						<div className="about__card">
							<div className="about__card-header">
								<h3>Favorite Books</h3>
							</div>
							<div className="about__card-content">
								<ul>
									<li>How Men Are Foolish</li>
									<li>The Dark and Drunken Night</li>
									<li>The Chronicles of Ohio</li>
								</ul>
							</div>
						</div>

						{/* Three Facts */}
						<div className="about__card">
							<div className="about__card-header">
								<h3>Three Facts</h3>
							</div>
							<div className="about__card-content">
								<ul>
									<li>I live in Georgia, but claim Chattanooga</li>
									<li>I have a younger sister</li>
									<li>Men Suck</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
