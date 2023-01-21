import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/imagenes/logo_negro.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <Container fluid>
          <Row className="align-items-center p-3">
            <Col className="navbar">
              <Link to="/home">
                <img
                  src={logo}
                  alt="home"
                  height="105em"
                  onClick={() => window.scrollTo(0, 0)}
                />
              </Link>
            </Col>
            <Col
              size={12}
              lg={6}
              className="text-center text-sm-center text-md-end"
            >
              <span>Who let the dogs out</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};
export default Footer;
