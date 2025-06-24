import React from "react";
import { Container } from "react-bootstrap";
import { FooterLogo, LinkedinIcon, MailIcon } from "../../icons/icon";

const Footer = () => {
  return (
    <Container id="contact" fluid className=" py-3">
      <Container className="py-5">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <div>{FooterLogo}</div>
            {/* <div className="fs-2 text-shadow">Bhoomika Agola</div> */}
            <div className="fs-4 py-4">
              <a href="#" className="text-decoration-none  menu-name px-3">
                <span>Home</span>
              </a>
              <a
                href="#experience"
                className="text-decoration-none  menu-name px-3"
              >
                <span>Experience</span>
              </a>
              <a
                href="#recentWork"
                className="text-decoration-none  menu-name px-3"
              >
                <span>Portfolio</span>
              </a>
              <a
                href="#skills"
                className="text-decoration-none  menu-name px-3"
              >
                <span>Skills</span>
              </a>
            </div>
            <div className="d-flex justify-content-center gap-4">
              <span className="footer-icon">
                <a
                  href="https://www.linkedin.com/in/bhoomikaagola/"
                  className="text-decoration-none "
                  target="_blank"
                >
                  {LinkedinIcon}
                </a>
              </span>
              <span className="footer-icon">
                <a
                  href="mailto: bhoomikaagola@gmail.com"
                  className="text-decoration-none "
                  target="_blank"
                >
                  {MailIcon}
                </a>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
