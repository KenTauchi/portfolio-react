import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { MenuData } from "../../data/MenuData";
import "./HeaderNav.css";

function HeaderNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <span className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </span>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <span href="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </span>
          </li>
          {MenuData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                {item.tab ? (
                  <a href={item.link} target="_blank">
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                ) : (
                  <a href={item.link}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default HeaderNav;
