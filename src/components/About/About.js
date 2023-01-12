import React, { useEffect } from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div data-aos="fade-down" data-aos-delay="100">
          <Image
            src="https://raw.githubusercontent.com/manny-pro/portfolio-image/main/IMG_899B4D62EF00-1.jpeg"
            alt="man-svgrepo"
          />
          </div>
          <div className="AboutBio">
          Hello, my name is<strong>Yannis Manicord</strong> self-taught since my youngest age, I like to learn new things to improve my skills. Very curious by nature, I love the world of web and new technologies, what I like most is the art and precision behind each design. With all my skills and knowledge, I will have the pleasure to dedicate myself fully to the development of your ideas in order to make them great projects.
          </div>
          <div className="AboutBio tagline2">
          I have gained confidence in the use of the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <div data-aos="fade-up" data-aos-delay="100">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
                </div>
              </Tech>
            ))}
            
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
