import ButtonDesign from "../../Components/ButtonDesign";
import "./Contact.css"
const Contact = () => {
  return (
    <div className="contact">
       <div className="text-center  mt-5">
                <h5 className=" service" >Contact us</h5>
                <p className="fs-2 text-white">Stay connected with us</p>
        </div>
        <form action="" className="form">
            <input type="text" placeholder="email address" className="input" /> <br />
            <input type="text" placeholder="Subject" className="input" /> <br />
            <input type="text" placeholder="Your message" className="input-msg" />
        </form>
        <div className="button" >
        <ButtonDesign title="Submit"></ButtonDesign>
        </div>
    </div>
  );
};

export default Contact;