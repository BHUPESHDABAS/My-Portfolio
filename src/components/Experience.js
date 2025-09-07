import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const experienceData = [
  {
    role: 'Full Stack Developer',
    company: 'DIRO– Internet Original Documents, Inc',
    duration: 'August 2025 - Present',
    description: '-  Developing and testing scalable frontend and backend systems while ensuring high performance and reliability.'
  },
  {
    role: 'Machine Learning Summer Intern',
    company: 'Delhi Technological University',
    duration: 'June 2024 - July 2024',
    description: '- Worked on building an Image Caption generating model using YOLOv5, ViT and LSTM.'
  },
  {
    role: 'Full Stack Web Developer Intern',
    company: 'Astitva',
    duration: 'November 2023 - April 2024',
    description: '- Worked on developing responsive web pages using JavaScript, HTML/CSS and React.'
  }
];

function Experience() {
  return (
    <section className="py-5 exp_background" id="experience">
      <Container>
        <h2 className="mb-4 text-center fw-bold">Experience</h2>
        <Row className='exp_row'>
          {experienceData.map((exp, index) => (
            <Col md={12} className="mb-4" key={index}>
              <h5 className="fw-bold">{exp.role} - {exp.company}</h5>
              <p className="mb-1" style={{ color: '#fb6060ff' }}>{exp.duration}</p>
              
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
