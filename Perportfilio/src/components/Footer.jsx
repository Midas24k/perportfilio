import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <Container className="text-center py-4 bg-dark text-white" id="contact">
    <p className="mb-2">© {new Date().getFullYear()} Roderick Hughey</p>
    <a href="https://github.com/yourGitHub" className="text-white mx-2">
      <FaGithub size={30} />
    </a>
    <a href="https://linkedin.com/in/yourLinkedIn" className="text-white mx-2">
      <FaLinkedin size={30} />
    </a>
  </Container>
);

export default Footer;
