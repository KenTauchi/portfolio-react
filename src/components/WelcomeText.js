import { styled } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Styled, { keyframes, Keyframes } from "styled-components";

const WelcomeText = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <VisuallyHidden>Ken Tauchi Portfolio Site</VisuallyHidden>
      <Animation>
        <AnimationText width={windowWidth}>
          Welcome to my portfolio site.
        </AnimationText>
      </Animation>
    </div>
  );
};

const VisuallyHidden = Styled.h1`
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  `;

const Animation = Styled.div`
  text-align: center;
      margin: 4rem auto 4rem;
  `;

const animatedText = keyframes`
  from {
          width: 0;
        }
        to {
          width: 280px;
        }
     
  `;
const animatedTextTablet = keyframes`
  from {
          width: 0;
        }
        to {
          width: 360px;
        }
     
  `;

const animatedCursor = keyframes`
  from {
          border-right-color: rgba(0, 255, 0, 0.75);
        }
        to {
          border-right-color: transparent;
        }
  `;

const AnimationText = Styled.p`
  font-family: "Dosis", sans-serif;
  
        font-size: 1.5rem;
        border-right: solid 3px rgba(0, 255, 0, 0.75);
        white-space: nowrap;
        overflow: hidden;
        margin: 0 auto;
        animation: ${({ width }) =>
          width < 767 ? animatedText : animatedTextTablet}
         3s steps(27, end) 2s 1 normal both, ${animatedCursor} 800ms steps(29, end) infinite;
        @media (min-width:768px){

            font-size: 2rem;
        }
  `;

export default WelcomeText;
