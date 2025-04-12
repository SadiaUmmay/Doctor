import Appoinment from "./Appoinment";
import Banner from "./Banner";
import Info from "./Info";
import Service from "./Service";
import Terms from "./Terms";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="">
    
    <Banner></Banner>
    <Info></Info>
    <Service></Service>
    <Terms></Terms>
    <Appoinment></Appoinment>
    <Testimonial></Testimonial>
    </div>
  );
};

export default Home;