import React from "react";
import { Container } from "react-bootstrap";
import {
  AntDesign,
  BootstrapIcon,
  CssIcon,
  FigmaIcon,
  HtmlIcon,
  JqueryIcon,
  JsIcon,
  NextjsIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  WordpressIcon,
} from "../../icons/icon";
import { Skillset1, Skillset2 } from "../../Data/data";

const Skills = () => {
  return (
    <Container
      id="skills"
      fluid
      className="bg-secondary-subtle  section-spacing"
    >
      <h1
        className="display-1 pt-5 text-center fw-medium text-shadow"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        Skills
      </h1>
      <Container className="py-5">
        <div className="d-flex justify-content-center gap-4 pb-5 flex-wrap">
          {Skillset1.map((item, index) => (
            <div key={index} className="skill-type text-center">
              <div className="rounded-3 skill-icon bg-skills p-3">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="flex-grow-1 d-flex"
                >
                  {item.techIcon}
                </div>
                {/* <div className="fs-5 text-primary fw-medium" data-aos="zoom-in" data-aos-delay="300">
                80<small>%</small>
              </div> */}
              </div>
              <div className="py-3" data-aos="zoom-in" data-aos-delay="300">
                {item.techName}
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center gap-4 pb-5 flex-wrap">
          {Skillset2.map((item, index) => (
            <div key={index} className="skill-type text-center">
              <div className="rounded-3 skill-icon bg-skills p-3">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="flex-grow-1 d-flex"
                >
                  {item.techIcon}
                </div>
                {/* <div
                className="fs-5 text-primary fw-medium"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                90%
              </div> */}
              </div>
              <div className="py-3" data-aos="zoom-in" data-aos-delay="300">
                {item.techName}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Skills;
