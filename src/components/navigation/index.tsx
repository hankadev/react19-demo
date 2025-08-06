import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className="navigation">
    <NavLink to="/old" className="nav-link">
      React 18
    </NavLink>
    <NavLink to="/new" className="nav-link">
      useActionState
    </NavLink>
  </nav>
);

export default Navigation;
