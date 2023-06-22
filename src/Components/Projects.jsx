import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCode } from "react-icons/fa";
import SimpleImageSlider from "react-simple-image-slider";
const Projects = () => {
  const images = [
    {
      url: "https://www.softwebsolutions.com/wp-content/uploads/2020/10/flutter-app-developer.jpg",
    },
    {
      url: "https://media.licdn.com/dms/image/D4D12AQE9Z7j5lY8-IQ/article-cover_image-shrink_720_1280/0/1681906934591?e=2147483647&v=beta&t=47MVd7wa1bE4tFKuAuljyKQ5IMvZq7ctkf6-SLBodWI",
    },
    {
      url: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    },
    {
      url: "https://www.totaljobs.com/advice/wp-content/uploads/graphic-designer-job-description.jpg",
    },
    {
      url: "https://goadfuel.com/wp-content/uploads/2022/03/website-design-development.jpg",
    },
  ];
  return (
    <div id="projects">
      <Container>
        <Row>
          <Col xl={6} xs={12}>
            <span className="project-icon">{<FaCode />}</span>{" "}
            <span className="project-title">Our Project Portfolio</span>
          </Col>

          <Col xl={6} xs={12} className="mt-3 ">
            <SimpleImageSlider
              width={335}
              height={400}
              images={images}
              showBullets={true}
              showNavs={false}
              autoPlay={true}
              slideDuration={2}
            />
            <p className="project-service">Our Services</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
