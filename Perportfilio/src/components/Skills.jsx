import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';

const Skills = () => (
  <Container className="py-5 text-center" id="skills">
    <h2 className="mb-4">Skills</h2>
    <Row>
      {[FaReact, FaNodeJs, FaDatabase, FaGitAlt].map((Icon, idx) => (
        <Col key={idx} xs={6} md={3} className="my-3">
          <Icon size={50} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default Skills;
