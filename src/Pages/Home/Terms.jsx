import HomePage from "../../Components/HomePage";
import img from "../../assets/images/treatment.png"
const Terms = () => {
    return (
        <div className="d-flex container mt-5 mb-5">
            <div>
                <img className="w-75 rounded-4" src={img} alt="" />
            </div>
            <div className="w-50 ">
                <HomePage
                    title="Exceptional Dental Care, on Your Terms"
                    heading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  si Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si Lorem Ipsum is"
                ></HomePage>
            </div>

        </div>
    );
};

export default Terms;