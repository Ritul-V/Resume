import React from "react";
import { Container } from "react-bootstrap";
import { FlyIcon, MeditationIcon } from "../../icons/icon";
import { experienceData } from "../../Data/data";

const Experience = () => {
  return (
    <Container fluid className="bg-secondary-subtle mt--85 section-spacing">
      <div id="experience" className="p-4"></div>
      <h1
        className="display-3 pt-5 text-center fw-medium"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        Experience & Education
      </h1>
      <Container>
        <div className="text-center" data-aos="fade-down" data-aos-delay="300">
          {FlyIcon}
        </div>
        <div className="row flex-column experience-row">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="experience-child col-12 col-md-6 pt-md-0 pt-5"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <div className="bg-experience p-4 rounded-4 position-relative z-1">
                <div className="fs-5 text-primary fw-medium">
                  {item.experienceTimeline}
                </div>
                <div className="fs-2 fw-medium">{item.position}</div>
                <div className="fs-5">{item.companyName}</div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="text-center pt-md-0 pt-5 experience-start-icon-dec"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          {MeditationIcon}
        </div>
      </Container>
    </Container>
  );
};

export default Experience;
