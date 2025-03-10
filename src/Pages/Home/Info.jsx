import { FaClock, FaPhone } from "react-icons/fa";
import "../../Components/HomePage.css"
import { FaLocationDot } from "react-icons/fa6";

const Info = () => {
  return (
    <div className="d-flex gap-3 infoLayout">
     <button className="d-flex buttonBg infoBtn">
        <FaClock className="text-lg"></FaClock>
        <div >
            <h4>Opening Hours</h4>
            <p>aliquid sit cupiditate aspernatur sequi vel optio inventore pariatur quia! </p>
        </div>
     </button>
     <button  className="d-flex infoBtn">
        <FaLocationDot></FaLocationDot>
        <div>
            <h4>Visit our location</h4>
            <p>Brooklyn, NY 10036, United States</p>
        </div>
     </button>
     <button  className="d-flex  buttonBg infoBtn">
        <FaPhone></FaPhone>
        <div>
            <h4>Contact us Now</h4>
            <p>+88083787832</p>
        </div>
     </button>
    </div>
  );
};

export default Info;