import Appoinment from "./Appoinment";
import Banner from "./Banner";
import Contact from "./Contact";
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
    <Contact></Contact>
    </div>
  );
};

export default Home;