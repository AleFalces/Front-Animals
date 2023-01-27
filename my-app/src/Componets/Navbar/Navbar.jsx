import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/imagenes/logo_blanco.png";

function CollapsibleExample() {
  return (

          <div className="collapse navbar-collapse" id="menu">
            {/* clases que estaban en el ul de abajo: navbar-nav  me-auto */}
            <ul className="ul">
              <li className="navbar nav-item">
                {/* clases que estaban en los NavLinks de abajo: text-light active */}
                <NavLink to="/adoptions" className="nav-link">
                  Adoptame🐾
                </NavLink>
              </li>
              <li className="navbar nav-item">
                <NavLink to="/aboutUs" className="nav-link">
                  ¿Quienes Somos?
                </NavLink>
              </li>
              <li className="navbar nav-item">
                <NavLink to="/donate" className="nav-link">
                  Aporta a nuestra causa
                </NavLink>
              </li>
              <li className="navbar nav-item">
                <NavLink to="/shop" className="nav-link">
                  Tienda
                </NavLink>
              </li>
              <li className="navbar nav-item">
                <img
                  src={user ? user.picture : "404"}
                  alt={user ? user.name : "siuuuu"}
                  className="navbar-brand imagenDeusuario"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default CollapsibleExample;
