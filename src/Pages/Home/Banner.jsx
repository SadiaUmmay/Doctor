
import HomePage from "../../Components/HomePage";
import "./Banner.css"
import chair from "../../assets/images/chair.png"
const Banner = () => {
  return (
    <div className="banner d-flex  items-center">
      <div>
       <HomePage
       title="Your New Smile Starts Here"
       heading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
       ></HomePage>
      </div>
      <div>
      <img className="w-75" src={chair} alt="" />
      </div>
    </div>
  );
};

export default Banner;