import React, { useState, forwardRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import Styled from "styled-components";
import "./Work.css";

import Slide from "@material-ui/core/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Work = ({ category, desc, tech, link, img, bcg, demo }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const marginTop = demo !== null ? "1rem" : "3rem";

  return (
    <div className="work">
      <div className="cards-side-top">
        <div className="cards-pic card-pic1"></div>
        <div>
          <img
            src={img}
            alt="app pic"
            onClick={handleClickOpen}
            style={{ cursor: "pointer", borderRadius: "10px" }}
          />
        </div>
        <h4 className="cards-heading">{category}</h4>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        transitionDuration={500}
        TransitionComponent={Transition}
        value="work"
      >
        <Container className="cards-back" style={{ background: bcg }}>
          <p>{desc}</p>
          <ul>
            {tech.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          {demo !== null ? (
            <DemoInfo href={demo} target="_blank">
              Play Demo
            </DemoInfo>
          ) : null}
          <MoreInfo
            style={{ marginTop: marginTop }}
            href={link}
            target="_blank"
          >
            Official Website
          </MoreInfo>
        </Container>
      </Dialog>
      <p className="open-card1 detail" onClick={handleClickOpen}>
        See more
      </p>
    </div>
  );
};

const Container = Styled.div`
  background-size: cover;
            height: 100%;
            background-blend-mode: screen;
            background-repeat: no-repeat;
  `;

const MoreInfo = Styled.a`
  display: block;
  text-align: center;
  margin-top: 1rem;
  text-decoration: underline;
  @media (min-width: 768px){
      font-size: 1.5rem;
  }
  `;

const DemoInfo = Styled.a`
  display: block;
  text-align: center;
  margin-top: 1.5rem;
  text-decoration: none;
  color: white;
  
  @media (min-width: 768px){
      font-size: 1.5rem;
  }
  `;

export default Work;
