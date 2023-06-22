import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaChevronDown, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" id="about">
      <Container>
        <Row className="about-row">
          <Col xs={2}>
            <span className="about-icon">{<FaLaptopCode />}</span>
          </Col>
          <Col xs={10}>
            <span className="about-title">Inventing The Future of Design</span>
          </Col>
        </Row>
      </Container>
      <div className="about-head">
        <Container>
          <Row>
            <Col lg={6} xs={12}>
              <img
                src="https://datahex.in/wp-content/uploads/2023/03/Illustration-AF-Blog-Illustration-2-1000x700-1.webp"
                alt=""
                style={{ width: "100%" }}
              />
            </Col>
            <Col lg={6} xs={12}>
              <h2>
                Welcome to DataHex, your one-stop solution for digital
                transformation and consultancy needs. We are a digital solution
                company that specializes in helping businesses navigate the
                complex world of digital technology and thrive in the digital
                age. Our team of experts brings a wealth of experience and
                knowledge in digital transformation and consultancy to help
                businesses of all sizes achieve their goals.
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container fluid="md">
          <Row>
            <Col>
              <h3 className="about-scroll">
                <a href="#projects">
                  Scroll to our Projects {<FaChevronDown />}
                </a>
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
