import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper style={styles.footer}>
      <div className="footer-icons" style={styles.icons}>
        <a href="https://www.linkedin.com/in/kentauchi/">
          <FontAwesomeIcon icon={faLinkedinIn} style={styles.icon} />
        </a>
        <a href="https://github.com/KenTauchi">
          <FontAwesomeIcon icon={faGithub} style={styles.icon} />
        </a>
        <a href="https://www.facebook.com/ken.tauchi">
          <FontAwesomeIcon icon={faFacebookF} style={styles.icon} />
        </a>
      </div>
      <p style={styles.copyRight}>
        &copy; 2021 Ken Tauchi - All Rights Reserved.
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  padding: 0 2rem 2rem 2rem;
  @media (min-width: 768px) {
    margin: 6rem 0;
  }
`;

const styles = {
  icons: {
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    fontSize: "1.7rem",
    margin: "0 2rem",
    color: "white",
  },
  copyRight: {
    fontFamily: "Fjalla One, sans-serif",
    textAlign: "center",
    fontSize: "0.8rem",
    margin: "2rem 0",
  },
};

export default Footer;
