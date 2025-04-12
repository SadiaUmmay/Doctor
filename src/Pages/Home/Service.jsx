import "./Service.css"
import img1 from "../../assets/images/fluoride.png"
import img2 from "../../assets/images/whitening.png"
import img3 from "../../assets/images/cavity.png"
const Service = () => {
    return (
        <div>
            <div className="text-center  mt-5">
                <h6 className="text-uppercase service" >Our services</h6>
                <p className="fs-3">Services we provide</p>
            </div>
            <div className="d-flex gap-2 text-center">
                <div className="service-card">
                    <img src={img1} alt="" />
                    <h5 className="mt-2">Fluoride Treatment</h5>
                    <p>Lorem ipsum, dolor sis nihil optio ullam <br /> corrupti et, 
                        aliquam perferendis ut.</p>
                </div>
                <div className="service-card"><img src={img3} alt="" />
                    <h5 className="mt-2">Cavity Filling</h5>
                    <p>Lorem ipsum, dolor sis nihil optio ullam <br /> corrupti et, 
                        aliquam perferendis ut.</p>
                </div>
                <div className="service-card"><img src={img2} alt="" />
                    <h5 className="mt-2">Teeth Whitening</h5>
                    <p>Lorem ipsum, dolor sis nihil optio ullam <br /> corrupti et, 
                        aliquam perferendis ut.</p>
                </div>
              
            </div>
        </div>
    );
};

export default Service;