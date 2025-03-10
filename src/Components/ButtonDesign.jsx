import "./HomePage.css"
const ButtonDesign = ({title}) => {
  return (
    <div>
      <button className="p-2  buttonBg">{title}</button>
    </div>
  );
};

export default ButtonDesign;