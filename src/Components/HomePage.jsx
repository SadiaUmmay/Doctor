import ButtonDesign from "./ButtonDesign";
import "./HomePage.css"
const HomePage = ({title, heading}) => {
  return (
    <div className="w-75 mt-5">
       <h1 className="">{title}</h1>
       <p>{heading}</p>
       <ButtonDesign
       title='get started'
       ></ButtonDesign>
    </div>
  );
};

export default HomePage;