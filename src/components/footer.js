import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://in.linkedin.com/in/nayan-savekar-963956251" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/nayan.savekar" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/nayan_savekar?igshid=NGExMmI2YTkyZg==" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>nsavekar20ecs@student.mes.ac.in :)</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
