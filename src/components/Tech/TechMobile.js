import React from "react";
import { TechData } from "../../data/TechData";

import "./TechMobile.css";

const TechMobile = () => {
  return (
    <div className="tech-mobile" id="skills">
      <h2>Tech Skills</h2>
      <div className="tech-mobile" style={styles.images}>
        {TechData.map((skill, index) => (
          <div key={index}>
            <div style={styles.box}>
              <img src={skill.image} alt="skill pic" />
            </div>
            <span style={styles.text}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  text: {
    display: "block",
    textAlign: "center",
    marginTop: 32,
    marginLeft: 0,
  },
  box: {
    height: "15vw",
    display: "flex",
    alignItems: "center",
  },
  images: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "3rem 2rem",
  },
};

export default TechMobile;
