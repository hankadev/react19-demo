import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className="navigation">
    <NavLink to="/old" className="nav-link">
      React 18
    </NavLink>
    <NavLink to="/use-transition" className="nav-link">
      useTransition
    </NavLink>
    <NavLink to="/use-action-state" className="nav-link">
      useActionState
    </NavLink>
    <NavLink to="/use-optimistic" className="nav-link">
      useOptimistic
    </NavLink>
  </nav>
);

export default Navigation;
