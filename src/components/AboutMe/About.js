import React from "react";

const About = ({ title, desc, index }) => {
  return (
    <div className={`about-me-desc${index}`}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default About;
