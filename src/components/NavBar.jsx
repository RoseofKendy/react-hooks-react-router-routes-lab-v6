import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      {/* Navigation links */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/directors">Directors</NavLink>
    </nav>
  );
}

export default NavBar;
