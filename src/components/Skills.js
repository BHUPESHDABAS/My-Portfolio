import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import './Skills.css'

const skills = {
  Programming_Languages: ['JavaScript', 'C++'],
  Frontend_Frameworks: [ 'HTML', 'CSS', 'React', 'Bootstrap'],
  Backend_Frameworks: ['Node.js', 'Express.js', 'Redis', 'Socket.IO'],
  Authentication_Security: ['JWT', 'OAUth', 'Bcrypt.js'],
  Tools: ['Git', 'GitHub', 'Postman', 'Mocha'],
  Cloud: ['AWS', 'MongoDB Atlas'],
  Databases: ['MongoDB', 'MySQL']
};

function Skills() {
  return (
    <section className="skills-section py-5" id="skills">
      <Container className="skills-container">
        <h2 className="mb-4 text-center fw-bold">Technical Skills</h2>
        <Row>
          {Object.entries(skills).map(([category, skillList], index) => (
            <Col md={6} key={index} className="mb-4">
              <h5 className="fw-semibold mb-3">{category}</h5>
              {skillList.map((skill, idx) => (
                <Badge bg="secondary" className="me-2 mb-2" key={idx}>{skill}</Badge>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
