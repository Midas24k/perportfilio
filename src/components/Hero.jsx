import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => (
  <Container fluid className="text-white bg-dark py-5" id="hero">
    <Row className="align-items-center">
      <Col md={6}>
        <img
          src="/your-photo.jpg"
          alt="Roderick Hughey"
          className="img-fluid rounded-circle shadow"
        />
      </Col>
      <Col md={6} className="text-end">
        <h1 className="display-4">Roderick Hughey</h1>
        <h2 className="text-primary">FullStack Web Developer</h2>
        <p className="lead mt-3">Welcome to my portfolio</p>
      </Col>
    </Row>
  </Container>
);

export default Hero;
