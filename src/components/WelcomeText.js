import { styled } from "@material-ui/core";
import React from "react";
import Styled, { keyframes, Keyframes } from "styled-components";

const WelcomeText = () => {
  return (
    <div>
      <VisuallyHidden class="visually-hidden">
        Ken Tauchi Portfolio Site
      </VisuallyHidden>
      <Animation>
        <AnimationText>Welcome to my portfolio site.</AnimationText>
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

const animatedCursor = keyframes`
from {
        border-right-color: rgba(0, 255, 0, 0.75);
      }
      to {
        border-right-color: transparent;
      }
`;

const AnimationText = Styled.p`
font-family: "Fjalla One", sans-serif;
      font-size: 1.5rem;
      border-right: solid 3px rgba(0, 255, 0, 0.75);
      white-space: nowrap;
      overflow: hidden;
      margin: 0 auto;
      animation: ${animatedText} 3s steps(27, end) 2s 1 normal both, ${animatedCursor} 800ms steps(29, end) infinite;
`;

export default WelcomeText;
