import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
   <nav className="nav container">
     <input type="checkbox" id="check"/>
            <label for="check">
                <i class="fa-solid fa-bars" id="open"></i>
                <i class="fa-solid fa-xmark" id="close"></i>
            </label>
    <h4>Doctors Portal</h4>
  <ul className="">
  <li><NavLink to ="/">Home</NavLink></li>
  <li><NavLink to ="about">About</NavLink></li>
  <li><NavLink to ="appoinment">Appoinment</NavLink></li>
  <li><NavLink to ="contact">Contact</NavLink></li>
 <li> <NavLink to ="reviews">Reviews</NavLink></li>
  </ul>
   </nav>
  );
};

export default Navbar;