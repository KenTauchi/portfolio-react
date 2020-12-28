import React from "react";
import ReactGitHubCalendar from "react-ts-github-calendar";
import "./GitHubBar.css";

const GitHubBar = () => {
  return (
    <div className="github-calendar">
      <h2>Github Coding Calender</h2>
      <div className="calendar">
        <ReactGitHubCalendar userName="KenTauchi" responsive={true} />
      </div>
    </div>
  );
};

export default GitHubBar;
