import { Link, NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Contact">Contact us</NavLink>
        <Link to='contact'>Let's talk</Link>
      </div>
    </nav>

    )
}