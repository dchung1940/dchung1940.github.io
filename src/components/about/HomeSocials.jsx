import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/HomeSocials.css";

const HomeSocials = () => {
	return (
		<div className="homepage-socials">
			<a href={INFO.socials.github} target="_blank" rel="noreferrer">
				<FontAwesomeIcon
					icon={faGithub}
					className="homepage-social-icon"
				/>
			</a>
			<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
				<FontAwesomeIcon
					icon={faLinkedin}
					className="homepage-social-icon"
				/>
			</a>
			<a href="./Resume.pdf" target="_blank" rel="noreferrer">
				<FontAwesomeIcon
					icon={faFile}
					className="homepage-social-icon"
				/>
			</a>
			<a
				href={`mailto:${INFO.main.email}`}
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon
					icon={faEnvelope}
					className="homepage-social-icon"
				/>
			</a>
		</div>
	);
};

export default HomeSocials;
