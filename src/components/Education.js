import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const experienceData = [
        {
            role: 'B.Tech (IT)',
            company: 'Delhi Technological University',
            duration: 'December 2021 - July 2025',
        },
        {
            role: '12th Standard',
            company: 'The Mann School',
            duration: 'April 2020 - March 2021',
        }
    ];


function Education (){
  return (
    <section className="py-5 " id="education">
      <Container>
        <h2 className="mb-4 text-center fw-bold">Education</h2>
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
    
  )
}

export default Education;