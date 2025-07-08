import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const experienceData = [
  {
    role: 'Machine Learning Summer Intern',
    company: 'Delhi Technological University',
    duration: 'June 2024 - July 2024',
    description: 'Worked on building an Image Caption generator using YOLOv5, ViT and LSTM.'
  },
  {
    role: 'Full Stack Web Developer Intern',
    company: 'Astitva',
    duration: 'November 2023 - April 2024',
    description: 'Developed responsive web pages using React and Bootstrap. Integrated REST APIs and worked on UI enhancements.'
  }
];

function Experience() {
  return (
    <section className="py-5 " id="experience">
      <Container>
        <h2 className="mb-4 text-center fw-bold">Experience</h2>
        <Row>
          {experienceData.map((exp, index) => (
            <Col md={12} className="mb-4" key={index}>
              <h5 className="fw-bold">{exp.role} - {exp.company}</h5>
              <p className="mb-1" style={{ color: '#535353' }}>{exp.duration}</p>
              <p>{exp.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
