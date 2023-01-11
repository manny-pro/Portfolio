import React from "react";
import { Nav, Logo, NavLink, NavMenu, NavBtn } from "./HeaderElements";
import pdf from "../../Assets/CV-Manicord.pdf";

const Header = ({ toggle }) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(pdf).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = pdf;
            alink.click();
        })
    })
  }
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src="https://raw.githubusercontent.com/manny-pro/portfolio-image/main/logo.svg.png?token=GHSAT0AAAAAABZSMRQEAEMGQJJ35I2JPXWQY555ZTQ"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
            <button className="btn PrimaryBtn" onClick={onButtonClick}>
            Télecharger mon CV
            </button>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Header;
