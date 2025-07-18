import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section bg-black d-flex align-items-center text-center" id="home">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {/* Profile Photo */}
            <Image
              src="/images/PortfolioProfilePic.jpg"
              alt="Bhupesh Dabas"
              roundedCircle
              className="mb-4 profile-img"
              width={170}
              height={180}
            />

            {/* Heading and Content */}
            <h1 className="display-4 fw-bold">Hi, I'm Bhupesh Dabas</h1>
            <p className="lead">Software Engineer | Backend & Full Stack Developer</p>
            <p>I build reliable, scalable, and secure systems with modern web technologies.</p>

            {/* Buttons */}
            <div className="mt-4">
              <Button
                variant="outline-light"
                className="me-3"
                href="https://drive.google.com/file/d/1_Zsu46pDGyrcGwE6kjbQPiS4f0cpylzP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </Button>
              <Button variant="primary" href="#projects">View Projects</Button>
              <Button variant="success" href="https://github.com/BHUPESHDABAS">View GitHub</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
