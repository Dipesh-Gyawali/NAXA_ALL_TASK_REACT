import { Link, NavLink, useLocation, useNavigate, useRoutes } from "react-router-dom";


export const Header = () => {
  const location = useLocation()
  console.log(location);

  const navigate = useNavigate()

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    if(location.pathname !== "/"){
      navigate("/")
      const section = document.getElementById(sectionId);
    }else{
      const section = document.getElementById(sectionId);
      if(section) {
        section.scrollIntoView({ behavior: "smooth" });
      }else {
        console.log(`Element with ID "${sectionId}" not found`);
      }  
    }
  }
  return (
    <header>
      <Link to="/" className="logo">
        <span>NAXA Projects</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/hooks" className="link">Hooks</NavLink>
        <NavLink to="/api" className="link">API</NavLink>
        <NavLink to="/service" onClick={(e) => scrollToSection(e, 'services')} className="link">Service</NavLink>
      </nav>
    </header>
  )



