import React from "react";
import * as FaIcons from "react-icons/fa";

export const MenuData = [
  {
    title: "Works",
    link: "#works",
    icon: <FaIcons.FaDesktop />,
    cName: "nav-text",
    tab: false,
  },
  {
    title: "About Me",
    link: "#abouts",
    icon: <FaIcons.FaUser />,
    cName: "nav-text",
    tab: false,
  },
  {
    title: "Skills",
    link: "#skills",
    icon: <FaIcons.FaTools />,
    cName: "nav-text",
    tab: false,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/kentauchi/",
    icon: <FaIcons.FaLinkedin />,
    cName: "nav-text",
    tab: true,
  },
  {
    title: "Github",
    link: "https://github.com/KenTauchi",
    icon: <FaIcons.FaGithub />,
    cName: "nav-text",
    tab: true,
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/ken.tauchi",
    icon: <FaIcons.FaFacebook />,
    cName: "nav-text",
    tab: true,
  },
];
