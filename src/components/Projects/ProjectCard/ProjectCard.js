import React, { useEffect } from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectCard() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <div data-aos="fade-right" data-aos-delay="100">
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          </div>
          <CardRight>
            <div data-aos="fade-left" data-aos-delay="100">

            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className="stackTitle">Tech Stack -</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              <a
                className="btn btn2 SecondarBtn"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </BtnGroup>
            </div>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
