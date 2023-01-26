import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/imagenes/logo_blanco.png";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <img src={logo} alt="home" height="60em" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Quienes Somos</Nav.Link>
            <Nav.Link href="#pricing">Apoya a nuestra causa</Nav.Link>
            <NavDropdown title="Mascotas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/adoptions">Adopcion</NavDropdown.Item>
              <NavDropdown.Item href="/lostPets">Perdidos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
