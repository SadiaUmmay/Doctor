import img from "../../assets/images/doctor-small.png"
import HomePage from "../../Components/HomePage";
import "./Banner.css"
const Appoinment = () => {
  return (
    <div className="d-flex appoinment mt-5 mb-5">
            <div>
                <img className="w-75 rounded-4" src={img} alt="" />
            </div>
            <div className="w-50 text-white ">
                <HomePage
                    title="Make an appointment Today"
                    heading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever standard dummy text ever since the  si Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si Lorem Ipsum is"
                ></HomePage>
            </div>
    </div>
  );
};

export default Appoinment;