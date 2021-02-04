import React, { useState } from "react";
import "./Footer.css";

import resume from "../../assets/resume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedinIn,
  faGithub,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Footer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <FooterWrapper className="footer">
      <div className="footer-icons" className="icons">
        <a href="https://www.linkedin.com/in/kentauchi/" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        </a>
        <a href="https://github.com/KenTauchi" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href={resume} target="_blank">
          <FontAwesomeIcon icon={faFile} className="icon" />
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
