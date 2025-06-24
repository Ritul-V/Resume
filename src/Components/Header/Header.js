import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Logo, MoonIcon, SunIcon } from "../../icons/icon";
import ThemeContext from "../../theme/ThemeContext";
import { Button } from "react-bootstrap";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className={`py-md-4 py-2  ${isSticky ? "sticky-top" : "bg-transparent"}`}
    >
      <Container>
        <Navbar.Brand href="#" className="align-items-center d-flex">
          {Logo}
          <span className="ps-sm-3 ps-2 fs-2 text-shadow">
            <span>Bhoomika</span>{" "}
            <span className="d-sm-inline d-none">Agola</span>
          </span>
        </Navbar.Brand>
        <div className="d-lg-none d-flex gap-3 align-items-center">
          <div
            aria-controls="navbarScroll"
            className={`custom-toggle ${expanded ? "open" : ""}`}
            onClick={() => setExpanded(!expanded)}
          >
            <span className="bar top"></span>
            <span className="bar middle"></span>
            <span className="bar bottom"></span>
          </div>
          <Button
            variant="link"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="theme-btn p-0 d-inline-flex align-items-center justify-content-center rounded-circle"
          >
            {theme === "light" ? MoonIcon : SunIcon}
          </Button>
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 fs-4" navbarScroll>
            <Nav.Link className="fs-5 menu-name px-3" href="#experience">
              <span>Experience</span>
            </Nav.Link>
            <Nav.Link className="fs-5 menu-name px-3" href="#recentWork">
              <span>Work</span>
            </Nav.Link>
            <Nav.Link className="fs-5 menu-name px-3" href="#skills">
              <span>Skills</span>
            </Nav.Link>
            <Nav.Link className="fs-5 menu-name px-3" href="#contact">
              <span>Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-lg-inline-block d-none">
          <Button
            variant="link"
            onClick={toggleTheme}
            className="theme-btn d-inline-flex align-items-center justify-content-center rounded-circle"
          >
            {theme === "light" ? MoonIcon : SunIcon}
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
