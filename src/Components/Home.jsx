import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaChevronDown,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home" id="home">
      <Container className="container">
        <Row className="home-row">
          <Col lg={6} xs={12} className="home-img">
            <img
              src="https://datahex.in/wp-content/uploads/2023/03/istockphoto-1306195988-612x612-1.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </Col>
          <Col lg={6} xs={12} className="home-data">
            <img
              src="https://datahex.in/wp-content/uploads/2023/04/DataNex_Logo1-768x85-1-1.png"
              alt=""
              style={{ width: "100%" }}
              className="home-logo"
            />
            <p>One-Stop Solution for Digital Transformation and Consultancy</p>
          </Col>
        </Row>
        <Row className="head-bottom ">
          <Col lg={6} xs={12} md={6} sm={12}>
            <div className="home-icons">
              <a href="https://wa.me/+91 9400123932">
                {" "}
                <span className="wa">{<FaWhatsapp />}</span>
              </a>
              <a href="https://twitter.com">
                {" "}
                <span className="tw">{<FaTwitter />}</span>
              </a>
              <a href="https://instagram.com/data.hex?igshid=MzRlodbiNWFlZA==">
                {" "}
                <span className="in">{<FaInstagram />}</span>
              </a>
              <a href="https://www.linkedin.com/company/data-hex/">
                {" "}
                <span className="li">{<FaLinkedin />}</span>
              </a>
            </div>
          </Col>
          <Col lg={6} xs={12} md={6}>
            <div>
              <h3 className="home-scroll">
                <a href="#about">Scroll Down {<FaChevronDown />}</a>
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
