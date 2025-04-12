import { FaClock, FaPhone } from "react-icons/fa";
import "../../Components/HomePage.css"
import { FaLocationDot } from "react-icons/fa6";

const Info = () => {
  return (
    <div className="d-flex gap-3 infoLayout">
     <button className="d-flex buttonBg infoBtn gap-4">
        <div className="infoBtn-btn">
        <FaClock className=""></FaClock>
        </div>
        <div >
            <h5>Opening Hours</h5>
            <p>aliquid sit cupiditate aspernatur sequi vel optio inventore pariatur quia! </p>
        </div>
     </button>
     <button  className="d-flex gray-btn infoBtn gap-4">
        <div className="infoBtn-btn">
        <FaLocationDot></FaLocationDot>
        </div>
        <div>
            <h5>Visit our location</h5>
            <p>Brooklyn, NY 10036, United States</p>
        </div>
     </button>
     <button  className="d-flex  buttonBg infoBtn gap-4">
        <div className="infoBtn-btn">
        <FaPhone className=""></FaPhone>
        </div>
        <div>
            <h5>Contact us Now</h5>
            <p>+88083787832</p>
        </div>
     </button>
    </div>
  );
};

export default Info;