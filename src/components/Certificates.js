import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Certificates.css';

const certificateData = [
  
  {
    title: 'Mastering Node.js & Express.js',
    provider: 'Auro.Edu',
    date: 'February 2025',
    link: 'https://drive.google.com/file/d/1OjCgu8orIcq9Xc8_qo41fskBo3TEKn8s/view?usp=sharing'
  },
  {
    title: 'Full Stack Web Development (Node.js)',
    provider: 'Coding Blocks',
    date: 'November 2024',
    link: 'https://drive.google.com/file/d/17Hci4-xaGEywbOg8egzPDIZeXQZcFmmv/view?usp=sharing'
  },
  {
    title: 'Software Testing',
    provider: 'NPTEL',
    date: 'October 2024',
    link: 'https://drive.google.com/file/d/1iLd7zVZrPIxaM-lAK93i27YdpmOs7aVR/view?usp=sharing'
  }
];

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <Container>
        <h2 className="text-center fw-bold mb-4">Certificates</h2>
        <Row>
          {certificateData.map((cert, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="certificate-card shadow-sm h-100">
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-danger">{cert.provider}</Card.Subtitle>
                  <Card.Text className="text-light-grey">{cert.date}</Card.Text>
                  <Button
                    variant="primary"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
