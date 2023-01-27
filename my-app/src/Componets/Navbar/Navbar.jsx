import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/imagenes/logo_negro.png";
import "./Navbar.css";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-custom"
      // variant="light"
    >
      <Container>
        <Nav.Link href="/home">
          <img src={logo} alt="home" height="80em" />
        </Nav.Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/aboutUs">Quienes Somos</Nav.Link>
            <Nav.Link href="/donate">Donaciones</Nav.Link>
            <Nav.Link href="/store">Tienda Solidaria</Nav.Link>

            <NavDropdown title="Mascotas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/adoptions">Adopcion</NavDropdown.Item>
              <NavDropdown.Item href="/lostPets">Perdidos</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link href="/">Ingresar / Registrarse</Nav.Link>
            <Nav.Link eventKey={2} href="/">
              Perfil
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
