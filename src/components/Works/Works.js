import React from "react";
import Work from "./Work";
import { ProjectData } from "../../data/ProjectData";

import "./Works.css";

const Works = () => {
  return (
    <div className="works" id="works">
      <h2>Works</h2>
      <div className="work-lists">
        {ProjectData.map((work, index) => (
          <Work
            category={work.category}
            desc={work.desc}
            tech={work.tech}
            link={work.link}
            img={work.img}
            bcg={work.bcgColor}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
