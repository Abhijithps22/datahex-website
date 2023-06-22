import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaChevronUp,
  FaRegCopyright,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contactpage">
      <Container>
        <Row className="contact-row">
          <Col lg={4} xs={12}>
            <ul className="contact-details mt-3">
              <img
                src="https://datahex.in/wp-content/uploads/2023/04/DataNex_Logo1-768x85-1-1.png"
                alt=""
                style={{ width: "250px" }}
              />
              <li>Datahex Digital Solution</li>
              <li>3rd Floor, Hilite Business Park</li>
              <li>Calicut, Kerala</li>
              <li>673001</li>
            </ul>
          </Col>
          <Col lg={4} xs={12}>
            <ul className="contact-mail">
              <li>Visit us: mail@datahex.in</li>
              <li>Contact us: +91 6238 274 734</li>
            </ul>
          </Col>
          <Col lg={4} xs={12}>
            <ul className="contact-icons">
              <a href="https://wa.me/+91 9400123932">
                <li className="wa">{<FaWhatsapp />} Whatsapp</li>
              </a>
              <a href="https://twitter.com">
                {" "}
                <li className="tw">{<FaTwitter />} Twitter</li>
              </a>
              <a href="https://instagram.com/data.hex?igshid=MzRlodbiNWFlZA==">
                <li className="in">{<FaInstagram />} Instagram</li>
              </a>
              <a href="https://www.linkedin.com/company/data-hex/">
                {" "}
                <li className="li">{<FaLinkedin />} Linkedln</li>
              </a>
            </ul>
          </Col>
          <div className="w-50 m-auto contact-copyright">
            <h3 className="text-center">
              {<FaRegCopyright />} DataHex Digital Solutions
            </h3>
            <hr style={{ border: "2px solid gray" }} />
          </div>

          <div className="page-top d-flex justify-content-end">
            <a href="#navbar">{<FaChevronUp />}</a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
