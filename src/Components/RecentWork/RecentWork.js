import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { GoTo, ReactIcon } from "../../icons/icon";
import { ProjectsData } from "../../Data/data";

const RecentWork = () => {
  const images = ProjectsData.map((item) => item.imageId);
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOpen = (index) => {
    setCurrentIndex(index);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  return (
    <Container id="recentWork" fluid className=" section-spacing">
      <h1
        className="display-3 pt-5 text-center fw-medium text-shadow"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        My Work
      </h1>
      <Container className="py-5">
        <div className="row">
          {ProjectsData.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-12 p-3"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <div className="bg-black border border-primary bg-opacity-25 p-2 rounded-2 position-relative shadow-sm recent-work">
                <img
                  onClick={() => handleOpen(index)}
                  src={item.imageId}
                  alt={item.siteName}
                  className="img-fluid object-fit-contain rounded-1"
                />
                <div className="position-absolute recent-work-data py-2 px-4 ">
                  <a
                    href={item.siteUrl}
                    target="_blank"
                    className="text-decoration-none "
                  >
                    <div className="d-flex align-items-center">
                      <div className="flex-100">
                        <div className="fs-6">
                          <span className="me-1">{item.siteName}</span> {GoTo}
                        </div>
                        <div className="fs-6">{item.technology}</div>
                      </div>
                      <div className="ms-auto">{item.techIcon}</div>
                    </div>
                  </a>
                  {item.externalLink && (
                    <a
                      href={item.externalLink}
                      target="_blank"
                      className="d-block"
                    >
                      <span className="me-1">Demo Link</span> {GoTo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div
          className="text-center pt-5"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <a href="#" className="btn btn-lg px-5 btn-outline-primary">
            Show More
          </a>
        </div> */}
      </Container>

      {/* Gallery Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        fullscreen
        className="image-gallery-modal"
      >
        <Modal.Body className="p-0 position-relative text-center bg-tranparent">
          <button
            onClick={handleClose}
            className="btn btn-close bg-danger p-2 position-fixed top-0 end-0 m-3"
          ></button>

          <img
            src={images[currentIndex]}
            alt={`Project ${currentIndex}`}
            className="w-100"
          />

          {/* Prev Button */}
          <button
            className="btn  nav-btn nav-prev-btn position-fixed top-50  translate-middle-y"
            onClick={handlePrev}
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            className="btn  nav-btn nav-next-btn position-fixed top-50  translate-middle-y"
            onClick={handleNext}
          >
            ›
          </button>

          {/* Website Link */}
          <div className="position-fixed bottom-0 start-50 translate-middle-x mb-4 z-2">
            <a
              href={ProjectsData[currentIndex].siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-4"
            >
              <span me-2>Visit Website</span>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default RecentWork;
