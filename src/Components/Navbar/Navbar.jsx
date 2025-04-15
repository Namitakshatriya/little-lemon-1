
import React,{ useState }  from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from '../../icons_assets/Logo.svg';
import Hamburger from '../../icons_assets/Hamburger.svg';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu,setMenu] = useState("Home");
  return (
    <nav className='navbar'>
    <img src={Hamburger} alt="Hamburger" className="menu-icon" />
<img src={logo} alt="Logo" className="logo" />

      {/* Navigation Menu */}
       {/* <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}> */}
      <ul className='navbar-menu'>
     <li onClick={()=>setMenu("Home")} className={menu=== "Home"?"active":"" }><Link to="/">Home</Link></li>      
     <li onClick={()=>setMenu("About")} className={menu=== "About"?"active":"" }><Link to="/about">About</Link></li> 
     <li onClick={()=>setMenu("Menu")} className={menu=== "Menu"?"active":"" }> <Link to="/menu">Menu</Link></li> 
     <li onClick={()=>setMenu("Reservations")} className={menu=== "Reservations"?"active":"" }><Link to="/reservations">Reservations</Link></li> 
    </ul>
</nav>
  )
}

export default Navbar;
