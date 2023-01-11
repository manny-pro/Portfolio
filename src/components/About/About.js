import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5556/5556529.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! Je m'appelle <strong>Yannis Manicord</strong> Autodidacte depuis mon plus jeune âge, j'aime apprendre de nouvelles choses pour améliorer mes compétences. De nature très curieuse, j'adore le monde du web et des nouvelles technologies, ce que j'aime le plus c'est l'art et la précision derrière chaque conception. Avec toutes mes capacités et mes connaissances, j'aurai le plaisir de me consacrer pleinement au développement de vos idées afin d'en faire de grands projets.
          </div>
          <div className="AboutBio tagline2">
            J'ai acquis une certaine confiance dans l'utilisation des technologies suivantes.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
