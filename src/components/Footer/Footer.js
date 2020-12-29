import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper className="footer">
      <div className="footer-icons" className="icons">
        <a href="https://www.linkedin.com/in/kentauchi/">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        </a>
        <a href="https://github.com/KenTauchi">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://www.facebook.com/ken.tauchi">
          <FontAwesomeIcon icon={faFacebookF} className="icon" />
        </a>
      </div>
      <p className="copyRight">&copy; 2021 Ken Tauchi - All Rights Reserved.</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  padding: 0 2rem 2rem 2rem;
`;

export default Footer;
