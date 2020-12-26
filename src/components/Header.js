import React from "react";
import video from "../assets/video.mp4";
import logo from "../assets/logo.svg";
import styled, { keyframes } from "styled-components";

const Header = () => {
  return (
    <div style={styles.header}>
      <video
        style={styles.videoBcg}
        preload="auto"
        autoPlay={true}
        loop="loop"
        muted="muted"
        volume="0"
      >
        <source src={video} />
        <source
          src="http://coming-sssoon.paperplane.io/video/time.mp4"
          type="video/mp4"
        />
        Video not supported
      </video>

      <Logo
        style={styles.logo}
        animationIn="zoomIn"
        animationOut="fadeOut"
        isVisible={true}
      >
        <img
          src={logo}
          alt="logo"
          style={{ display: "block", width: "100%" }}
        />
      </Logo>

      <div style={styles.videoCover}></div>
    </div>
  );
};

const styles = {
  header: {
    position: "relative",
    height: "40vh",
  },

  videoBcg: {
    position: "absolute",

    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  videoCover: {
    position: "absolute",
    background:
      "linear-gradient(0deg, black 5%, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0.4) 100%)",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
};

const zoomIn = keyframes`
  0% {
      width: 0%;
    }

    50% {
      width: 30vw;
    }

    100% {
      width: 60vw;
    }
`;

const Logo = styled.div`
  z-index: 1;
  width: 60vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  webkittransform: translate(-50%, -50%);
  mstransform: translate(-50%, -50%);
  animation: ${zoomIn} 2s linear;
`;

export default Header;
