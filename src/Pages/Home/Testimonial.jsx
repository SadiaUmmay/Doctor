import quote from "../../assets/icons/quote.svg"
import img1 from "../../assets/images/people1.png"
import img2 from "../../assets/images/people2.png"
import img3 from "../../assets/images/people3.png"
import "./Testimonial.css"
const Testimonial = () => {
  return (
    <div>
      <div className="heading">
        <div>
          <p className="testimonial-color">Testimonial</p>
          <p className="fs-2">What Our Patients Says</p>
        </div>
        <div> <img className="quoteimg" src={quote} alt="" /></div>
      </div>
      <div className="d-flex">
        <div  className="testimonial-card">
          <p> It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
          <div className="d-flex">
            <img className="testimonial-img" src={img1} alt="" />
            <div className="testimonial-name">
              <p className="fw-semibold">Winson Herry</p>
              <p>California</p>
            </div>
          </div>
        </div>
        <div  className="testimonial-card">
          <p> It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
          <div className="d-flex">
            <img className="testimonial-img" src={img2} alt="" />
            <div className="testimonial-name">
              <p className="fw-semibold">Winson Herry</p>
              <p>California</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p> It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
          <div className="d-flex">
            <img className="testimonial-img" src={img3} alt="" />
            <div className="testimonial-name">
              <p className="fw-semibold">Winson Herry</p>
              <p>California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;