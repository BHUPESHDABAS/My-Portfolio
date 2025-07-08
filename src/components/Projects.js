import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Carousel } from 'react-bootstrap';
import './Projects.css'

const projectData = [
  {
    title: 'GitHub Dashboard',
    description: 'Browse GitHub users or repositories via the GitHub API in a personalized dashboard.',
    techStack: ['JavaScript', 'Node.js','Express','React', 'Bootstrap', 'MongoDB', 'Axios', 'GitHub API'],
    images: ['/images/HomePage.png', '/images/Repositories.png', '/images/LoginPage.png', '/images/SignupPage.png'],
    github: 'https://github.com/BHUPESHDABAS/GitHub-DashBoard',
    demo: 'https://yourusername.github.io/github-dashboard/'
  },
  {
    title: 'BlogSphere',
    description: 'A full-stack blogging platform where users can read blogs and create and update their Blogs.',
    techStack: ['JavaScript', 'Node.js','Express', 'React', 'Bootstrap','MongoDB'],
    images: ['/images/BlogHome.png', '/images/CreateBlog.png', '/images/BlogLogin.png', '/images/BlogSignup.png'],
    github: 'https://github.com/BHUPESHDABAS/BlogSphere-Web-Application',
    demo: 'https://blogsphere.vercel.app/'
  },
  {
    title: 'E-Commerce Website',
    description: 'A scalable e-commerce platform with product filtering, cart, checkout, and admin panel.',
    techStack: ['JavaScript', 'Node.js','Express', 'HBS', 'Bootstrap', 'MongoDB', 'Cookies&Sessions'],
    images: ['/images/ShopHome.png', '/images/ProductView.png', '/images/ShopCart.png', '/images/ShopSignup.png'],
    github: 'https://github.com/yourusername/ecommerce-app',
    demo: 'https://github.com/BHUPESHDABAS/E-Commerce-Website'
  },
  {
    title: 'Team Chat Application',
    description: 'Real-time group communication app with group chat, built using WebSockets.',
    techStack: ['JavaScript', 'Node.js','Express', 'Socket.io',  'HTML', 'CSS'],
    images: ['/images/Chat-Home-Grp.png'],
    github: 'https://github.com/BHUPESHDABAS/Group-Chat-Application',
    demo: 'https://teamchat.vercel.app/'
  }
];

function Projects() {
  return (
    <section className="py-5 " id="projects">
      <Container>
        <h2 className="mb-4 text-center fw-bold">Projects</h2>
        <Row>
          {projectData.map((project, index) => (
            <Col md={6} lg={6} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm">
                <Carousel interval={null} indicators={false}>
                  {project.images.map((imgSrc, i) => (
                    <Carousel.Item key={i}>
                      <img
                        className="d-block w-100"
                        src={imgSrc}
                        alt={`Slide ${i + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-2">
                    {project.techStack.map((tech, i) => (
                      <Badge bg="secondary" className="me-1" key={i}>{tech}</Badge>
                    ))}
                  </div>
                  <Button variant="outline-dark" href={project.github} target="_blank" className="me-2">GitHub</Button>
                  {/* <Button variant="primary" href={project.demo} target="_blank">Live Demo</Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;