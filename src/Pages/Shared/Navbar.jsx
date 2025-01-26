import { Link } from "react-router-dom";

const Navbar = () => {
  const navlink = <div>
  <Link to ="/">Home</Link>
  <Link to ="about">About</Link>
  <Link to ="appoinment">Appoinment</Link>
  <Link to ="contact">Contact</Link>
  <Link to ="reviews">Reviews</Link>

  </div>
  return (
   <div>
    {navlink}
   </div>
  );
};

export default Navbar;