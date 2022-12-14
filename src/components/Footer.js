import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
           
              <a target="_blank" href="https://www.instagram.com/v.mijares/"><img src={navIcon3} alt="Icon" /></a>
              <a target="_blank" href="https://www.instagram.com/gabrielahay_/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Vanesa Mijares & Gabriela Hay</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
