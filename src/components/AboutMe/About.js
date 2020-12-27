import React from "react";

const About = ({ title, desc }) => {
  return (
    <div className="about-me-desc1 about-me-desc">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default About;
