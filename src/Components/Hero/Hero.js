import React from "react";
import { Container } from "react-bootstrap";
import { Images } from "../../images";
import { CvPDF } from "../../images/images";
import { HI } from "../../icons/icon";
import Counter from "../UI/Counter";

const Hero = () => {
  return (
    <Container fluid className="hero-section">
      <Container className="py-3 position-relative">
        <div className="bg-hi">{HI}</div>
        <div className="row">
          <div className="col-lg-6 col-12 d-flex flex-column gap-3 justify-content-center">
            <div className="display-3" data-aos="fade-up" data-aos-delay="300">
              I'm <span className="fw-bold text-shadow">Bhoomika</span>
            </div>
            <div
              className="display-4 fw-bold text-shadow"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Web Designer
            </div>
            <div className="fs-4 py-3" data-aos="fade-up" data-aos-delay="900">
              I always aspired to be in a creative field and in web designing I
              found my freedom creativity and it matched my acadamic skills. It
              is always feels great when I built something unique and it inspire
              me to do even more better.
            </div>
            <div className="py-2" data-aos="fade-up" data-aos-delay="1200">
              <a
                href={CvPDF}
                target="_blank"
                title="Open PDF"
                rel="noreferrer"
                className="btn btn-lg btn-outline-primary px-lg-5 px-3"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="d-flex justify-content-center py-5">
              <div className="profile-image">
                <img
                  src={Images.Bhumika}
                  alt="Bhumika"
                  className="img-fluid rounded-5 border border-2 border-primary transform-5deg no-transform-on-hover box-shadow-light bg-body-dark profile-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="experience-highlight py-lg-3 row align-items-center justify-content-center rounded-4 mt-5 box-shadow-light text-shadow">
          <div className="col-lg-4 col-md-6 col-12 py-3">
            <div className="row align-items-center justify-content-center">
              <Counter targetNumber={4} speed={300} />
              <div className="col-8 fs-3 ps-3 lh-sm">
                Years of
                <br />
                Experience
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 py-3">
            <div className="row align-items-center justify-content-center">
              <Counter targetNumber={25} speed={100} />
              <div className="col-8 fs-3 ps-3 lh-sm">
                Projects
                <br />
                Completed
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 py-3">
            <div className="row align-items-center justify-content-center">
              <Counter targetNumber={5} speed={200} />
              <div className="col-8 fs-3 ps-3 lh-sm">
                Different
                <br />
                Technologies
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Hero;
