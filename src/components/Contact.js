import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_bykp6br',
      'template_bn17eqd',
      form,
      'ZVmMSSCMn71NPukZa'
    ).then(() => {
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    }).catch(() => {
      setStatus('Something went wrong. Please try again.');
    });
  };

  return (
    <section className="py-5" id="contact">
      <Container>
        <h2 className="mb-4 text-center fw-bold">Contact</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} name="message" value={form.message} onChange={handleChange} placeholder="Enter your message" required />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">Send Message</Button>
              </div>

              {status && (
                <Alert variant={status.includes('successfully') ? 'success' : 'danger'} className="mt-3 text-center">
                  {status}
                </Alert>
              )}
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={8} className="text-center">
            <p className="text-white"> 
              Or reach me directly at <a href="mailto:bhupeshdabas94@gmail.com">bhupeshdabas94@gmail.com</a>
              
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
