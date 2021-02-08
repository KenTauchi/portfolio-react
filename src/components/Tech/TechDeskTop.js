import React, { useEffect, useState } from "react";
import Bubble from "./Bubble";
import "./Bubble.css";
import "./TechDesk.css";

const TechDeskTop = () => {
  const [rendered, setRendered] = useState(false);
  const [on, setOn] = useState(false);
  const [width, setWidth] = useState(0);

  const updateWidthSize = () => setWidth(window.innerWidth);

  const heightdata = width < 900 ? 400 : width < 1024 ? 500 : 650;

  useEffect(() => {
    setRendered(true);
    window.addEventListener("resize", updateWidthSize);
    updateWidthSize();
  }, [width, rendered]);

  return (
    <div className="tech-desk" id="skills">
      <h2>Tech Skills</h2>
      <div className="skill-contents">
        <div className="buttons">
          <div id="combine" className="button">
            <span>Combine</span>
          </div>
          <div id="front-back" className="button check">
            <span>Front / Back End</span>
          </div>
        </div>
        <span id="skill-name">Hover Icons</span>
      </div>
      <div id="techdesk">
        <Bubble height={heightdata} rendered={rendered} switch={on} />
      </div>
    </div>
  );
};

export default TechDeskTop;
