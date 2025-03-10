import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  return (
   <nav className="nav">
     <input type="checkbox" id="check"/>
            <label for="check">
                <FaBars id="open"></FaBars>
                <FaXmark id="close"></FaXmark>
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