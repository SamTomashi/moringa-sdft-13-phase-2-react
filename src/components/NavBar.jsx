import { Link, NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Logo
        </NavLink>
        <NavLink to="/about" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>About</NavLink>
        <NavLink to="/contact" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>Contact us</NavLink>
        <NavLink to='/join-us' className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>Let's talk</NavLink>
      </div>
    </nav>

    )
}