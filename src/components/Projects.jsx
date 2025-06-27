import { Card, Container, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: 'Fitness App',
    img: '/fitness-app.jpg',
    tech: 'React, Node, MongoDB',
  },
  {
    title: 'E-Commerce Site',
    img: '/ecommerce.jpg',
    tech: 'React, Express, SQL',
  },
];

const Projects = () => (
  <Container className="py-5" id="projects">
    <h2 className="text-center mb-4">Projects</h2>
    <Row>
      {projects.map((proj, idx) => (
        <Col md={6} key={idx} className="mb-4">
          <Card bg="dark" text="white" className="shadow">
            <Card.Img variant="top" src={proj.img} />
            <Card.Body>
              <Card.Title>{proj.title}</Card.Title>
              <Card.Text>{proj.tech}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Projects;
