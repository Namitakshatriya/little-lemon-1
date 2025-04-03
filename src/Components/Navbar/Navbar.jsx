import React,{ useState }  from 'react';
import './Navbar.css';
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
       <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>

     <li onClick={()=>setMenu("Home")} className={menu=== "Home"?"active":"" }  >Home</li>      
     <li onClick={()=>setMenu("About")} className={menu=== "About"?"active":"" }>About</li> 
     <li onClick={()=>setMenu("Menu")} className={menu=== "Menu"?"active":"" }>Menu</li> 
     <li onClick={()=>setMenu("Reservations")} className={menu=== "Reservations"?"active":"" }>Reservations</li> 
     <li onClick={()=>setMenu("Order-Online")} className={menu=== "Order-Online"?"active":"" }>Order Online</li> 
    </ul>
</nav>
  )
}

export default Navbar;