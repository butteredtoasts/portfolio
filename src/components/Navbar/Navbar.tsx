import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const path = window.location.pathname;

  return (
    <>
      <header className="Header">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <p>Thank you!</p>
      </header>
    </>
  );
}

export default Navbar;
