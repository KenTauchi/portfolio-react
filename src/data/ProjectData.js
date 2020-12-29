import nearestImg from "../assets/nearest.png";
import naniwaismImg from "../assets/naniwaism.jpg";
import savyImg from "../assets/savy.jpg";
import langaraImg from "../assets/langara.jpg";
import portfolioImg from "../assets/portfolio.jpg";

export const ProjectData = [
  {
    category: "React Data Driven Website",
    desc:
      "An educational data driven responsive platform that aims to help people who are concerned about our environment to get more information about recycling.",
    tech: ["React", "React Hooks", "React Redux", "SASS", "MySQL", "Node.js"],
    link: "https://www.savy-app.ca/",
    img: savyImg,
    bcgColor: "linear-gradient(90deg, #229954, #1D8348)",
  },
  {
    category: "React Official College Website",
    desc:
      "Langara Web and Mobile Development Program Official Website. The website is a headless CMS.",
    tech: ["React", "React Hooks", "SASS", "API", "PHP", "WordPress"],
    link: "https://langara-app.ca",
    img: langaraImg,
    bcgColor: "linear-gradient(90deg, #D35400, #A04000)",
  },
  {
    category: "Phonegap Mobile App",
    desc:
      "Do you spend a lot of time in fiding a washroom? Nearest helps you find the closest available washrooms anywhere in the world.",
    tech: ["Phonegap", "Framework7", "JQuery", "AJAX", "API", "Firebase"],
    link: "http://nearest.websterinfotech.com/",
    img: nearestImg,
    bcgColor: "linear-gradient(90deg, #6cb0ab, #536293)",
  },
  {
    category: "Magazine Mockup Website",
    desc:
      "A magazine mockup website which features the Naniwa culutre. Naniwa is the former name for the Osaka region in Japan.",
    tech: ["HTML", "CSS", "JQuery"],
    link: "https://gifted-mcclintock-509721.netlify.app/",
    img: naniwaismImg,
    bcgColor: "linear-gradient(90deg, #808B96, #2C3E50)",
  },
  {
    category: "React Portfolio Website",
    desc:
      "My portfolio website built with React. D3 is incorporated into the skill part. The Github calender is showing how often I am dedicating to coding through a year.",
    tech: ["React", "React Hooks", "CSS", "D3"],
    link: "https://gifted-mcclintock-509721.netlify.app/",
    img: portfolioImg,
    bcgColor: "linear-gradient(90deg, #808B96, #2C3E50)",
  },
];
