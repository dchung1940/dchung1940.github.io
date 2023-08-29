import React from "react";

import HomeSocials from "../about/HomeSocials";
import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className = "footer-links">
					<HomeSocials/>
				</div>
				<div className="footer-credits">
					<div className="footer-credits-text">
						© Daniel Chung 2023 
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
