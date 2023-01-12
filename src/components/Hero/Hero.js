import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <div data-aos="fade-right" data-aos-delay="100">
            <h1>Hi, I'm Yannis Manicord</h1>
            <h5>Fullstack Developer</h5>
            <p>
              Programming is not just lines of code but modern art 
            </p>
            </div>
          </HeroLeft>
          <HeroRight>
            <div data-aos="fade-left" data-aos-delay="100">
            <Image
              src="https://raw.githubusercontent.com/manny-pro/portfolio-image/main/IMG_9928.jpg"
              alt="ME"
            />
            </div>
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Go down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
