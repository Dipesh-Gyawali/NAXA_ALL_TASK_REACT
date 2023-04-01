import { Link, NavLink } from "react-router-dom";


export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        {/* <img src={Logo} alt="Logo" /> */}
        <span>NAXA Projects</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/api" className="link">API</NavLink>
        <NavLink to="/service" className="link">Service</NavLink>
      </nav>
    </header>
  )
