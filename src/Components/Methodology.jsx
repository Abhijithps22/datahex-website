import React from "react";
import { FaChevronDown, FaCrosshairs } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const Methodology = () => {
  return (
    <div>
      <div className="container" id="methodology">
        <h3 className="text-center meth-scroll">
          <a href="#methodology">
            {" "}
            Scroll to our methodology {<FaChevronDown />}
          </a>
        </h3>{" "}
        <div>
          <h3 className="meth-title">{<FaCrosshairs />} Our Methodology</h3>
        </div>
      </div>
      <Container>
        <Row>
          <Col xl={6} xs={12}>
            <img
              src="https://datahex.in/wp-content/uploads/2023/03/business-mission-5642382-4706898.webp"
              alt=""
              style={{ width: "100%" }}
            />
            <h4 className="meth-desc"> our vision</h4>
            <p className="meth-para">
              Our vision at DataHex is to be a leading digital solutions company
              that empowers businesses to achieve their full potential by
              leveraging the latest technologies and innovative digital
              strategies.
            </p>
          </Col>
          <Col xl={6} xs={12}>
            <img
              src="https://datahex.in/wp-content/uploads/2023/03/mission-goals-4252954-3526675.webp"
              alt=""
              style={{ width: "100%" }}
            />
            <h4 className="meth-desc" style={{ textAlign: "right" }}>
              Our Mission
            </h4>
            <p className="meth-para" style={{ textAlign: "right" }}>
              At DataHex, our mission is to provide tailored digital
              transformation and consultancy services, guiding businesses
              through the dynamic digital realm with innovative, client-centric
              solutions.
            </p>
          </Col>
          <div>
            <h3 className="meth-scroll">
              <a href="#contactpage">
                Scroll to Contact Us {<FaChevronDown />}
              </a>
            </h3>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Methodology;
