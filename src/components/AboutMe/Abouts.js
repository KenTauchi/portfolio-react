import React from "react";
import About from "./About";
import { MyData } from "../../data/MyData";
import Styled from "styled-components";

import image1 from "../../assets/profpic.jpg";
import image2 from "../../assets/football.jpg";

import "./Abouts.css";

const Abouts = () => {
  return (
    <div className="abouts" id="abouts">
      <h2>About Me</h2>
      <Images className="profile-img">
        <Image1 className="image1"></Image1>
        <Image2 className="image2"></Image2>
      </Images>
      <div className="descs">
        {MyData.map((data, index) => (
          <About
            key={index}
            title={data.title}
            desc={data.desc}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const Images = Styled.div`
    position: relative;
        width: 100%;
        height: 80vw;
        @media (min-width: 768px){
            width: 60vw;
            height: 60vw;
        }
        @media (min-width: 1200px){
            width: 50vw;
            height: 50vw;
            max-width: 600px;
            max-height: 500px;
        }
    `;
const Image1 = Styled.div`
    width: 100%;
          height: 100%;
          position: absolute;
          background-image: radial-gradient(
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0),
              black,
              black
            ),
            url(${image1});
          background-repeat: no-repeat;
          background-size: cover;
          top: 0;
          left: 0;
          transition: all 0.5s ease-in-out;
    `;

const Image2 = Styled.div`
    display: inline-block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          opacity: 0;

          background-image: radial-gradient(
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0),
              black,
              black
            ),
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0) 5%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 95%,
              rgba(0, 0, 0, 1) 100%
            ),
            linear-gradient(
              0deg,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0) 5%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 95%,
              rgba(0, 0, 0, 1) 100%
            ),
            url(${image2});
          background-size: cover;
          background-repeat: no-repeat;
          background-size: cover;

          transition: all 1s ease-in-out;
          &:hover {
            opacity: 1;
            transform: translate(0) !important;
        }
    `;

export default Abouts;
