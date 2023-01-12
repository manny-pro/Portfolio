import React from "react";
import { Nav, Logo, NavLink, NavMenu, NavBtn } from "./HeaderElements";
import pdf from "../../Assets/CV-Manicord.pdf";

const Header = ({ toggle }) => {
  const onButtonClick = () => {
    fetch(pdf).then(response => {
        response.blob().then(blob => {

            const fileURL = window.URL.createObjectURL(blob);
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
            src="https://raw.githubusercontent.com/manny-pro/portfolio-image/main/IMG_899B4D62EF00-1.jpeg"
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
            Download my CV
            </button>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Header;
