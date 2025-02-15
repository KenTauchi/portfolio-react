import pivotcarewebImg from "../assets/pivotcareweb.jpg";
import pivotcaremobileImg from "../assets/pivotcaremobile.jpg";
import nearestImg from "../assets/nearest.png";
import naniwaismImg from "../assets/naniwaism.jpg";
import savyImg from "../assets/savy.jpg";
import langaraImg from "../assets/langara.jpg";
import langaraImgV2 from "../assets/langarav2.jpeg";
import portfolioImg from "../assets/portfolio.jpg";
import quizapp from "../assets/quizapp.jpg";

export const ProjectData = [
  {
    category: "React Native Mobile App",
    desc:
      "The app helps companies continue providing fitness and mental health care for their employees. Web app for employer and instructors are also available.",
    tech: ["React Native", "Expo", "Redux", "MySQL", "Node.js"],
    link: "https://pivotcare.ca/",
    img: pivotcaremobileImg,
    bcgColor: "linear-gradient(90deg, #7662a5, #5C4D80)",
    demoLink: null,
  },
  {
    category: "React Web Admin App",
    desc:
      "The app helps companies continue providing fitness and mental health care for their employees. Mobile app for employee is also available.",
    tech: [
      "React",
      "React Hooks",
      "Redux",
      "Styled-Component",
      "MySQL",
      "Node.js",
    ],
    link: "https://pivotcare.ca/",
    img: pivotcarewebImg,
    bcgColor: "linear-gradient(90deg, #7662a5, #5C4D80)",
    demoLink: null,
  },
  {
    category: "React Data Driven Website",
    desc:
      "An educational data driven responsive platform that aims to help people who are concerned about our environment to get more information about recycling.",
    tech: ["React", "React Hooks", "Redux", "SASS", "MySQL", "Node.js"],
    link: "https://www.savy-app.ca/",
    img: savyImg,
    bcgColor: "linear-gradient(90deg, #229954, #1D8348)",
    demoLink: null,
  },
  {
    category: "React Official College Website V2",
    desc:
      "Langara Web and Mobile Development Program Official Website. The website is a headless CMS.",
    tech: ["React", "Next.js", "Styled Component", "API", "WordPress"],
    link: "https://langara-app.vercel.app",
    img: langaraImgV2,
    bcgColor: "linear-gradient(90deg, #c36448, #893701)",
    demoLink: null,
  },
  {
    category: "React Official College Website MVP",
    desc:
      "MVP of Langara Web and Mobile Development Program Official showcase Website. The website is a headless CMS.",
    tech: ["React", "React Hooks", "SASS", "API", "PHP", "WordPress"],
    link: "https://zen-curran-2f42a7.netlify.app",
    img: langaraImg,
    bcgColor: "linear-gradient(90deg, #D35400, #A04000)",
    demoLink: null,
  },
  {
    category: "Phonegap Mobile App",
    desc:
      "Do you spend a lot of time in fiding a washroom? Nearest helps you find the closest available washrooms anywhere in the world.",
    tech: ["Phonegap", "Framework7", "JQuery", "AJAX", "API", "Firebase"],
    link: "http://nearest.websterinfotech.com/",
    img: nearestImg,
    bcgColor: "linear-gradient(90deg, #6cb0ab, #536293)",
    demoLink: "https://vimeo.com/507694442",
  },
  {
    category: "Magazine Mockup Website",
    desc:
      "A magazine mockup website which features the Naniwa culutre. Naniwa is the former name for the Osaka region in Japan.",
    tech: ["HTML", "CSS", "JQuery"],
    link: "https://gifted-mcclintock-509721.netlify.app/",
    img: naniwaismImg,
    bcgColor: "linear-gradient(90deg, #808B96, #2C3E50)",
    demoLink: null,
  },
  {
    category: "React Portfolio Website",
    desc:
      "My portfolio website built with React. D3 is incorporated into the skill part. The Github calender is showing how often I am dedicating to coding through a year.",
    tech: ["React", "React Hooks", "CSS", "D3"],
    link: "https://gifted-mcclintock-509721.netlify.app/",
    img: portfolioImg,
    bcgColor: "linear-gradient(90deg, #808B96, #2C3E50)",
    demoLink: null,
  },
  {
    category: "React Quiz App",
    desc:
      "The quiz app has several options for the difficulty and number of questios to choose. The background image changes depending on the season you play the app in.",
    tech: ["React", "React Hooks", "TypeScript", "CSS"],
    link: "https://kentauchi.github.io/typescript-react-quizapp/",
    img: quizapp,
    bcgColor: "linear-gradient(90deg, #808B96,  #2E86C1)",
    demoLink: null,
  },
];
