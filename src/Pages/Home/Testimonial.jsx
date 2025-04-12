import quote from "../../assets/icons/quote.svg"
import "./Testimonial.css"
const Testimonial = () => {
  return (
    <div>
      <div className="d-flex gap-6">
        <div>
            <p>Testimonial</p>
            <p>What Our Patients Says</p>
        </div>
        <img className="quoteimg" src={quote} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;