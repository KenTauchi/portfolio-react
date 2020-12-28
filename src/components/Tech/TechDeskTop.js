import React, { useEffect, useState } from "react";
import Bubble from "./Bubble";
import "./Bubble.css";

const TechDeskTop = () => {
  const [rendered, setRendered] = useState(false);
  const [get, setGet] = useState("");

  useEffect(() => {
    setRendered(true);
  }, [rendered]);
  return (
    <div>
      <button id="front-back">front back</button>
      <button id="combine">combine</button>
      <div id="techdesk">
        <Bubble height={400} rendered={rendered} />
      </div>
    </div>
  );
};

export default TechDeskTop;
