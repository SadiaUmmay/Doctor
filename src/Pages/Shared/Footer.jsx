import "./Footer.css"
const Footer = () => {
  return (
   <div className="footer">
     <div className="footer-flex ">
      <div>
        <h6>SERVICES</h6>
        <ul className="">
            <li><a href="">Emergency Checkup</a></li>
            <li><a href="">Monthly Checkup</a></li>
            <li><a href="">Weekly Checkup</a></li>
            <li><a href="">Deep Checkup</a></li>
        </ul>
      </div>
      <div>
      <h6>ORAL HEALTH</h6>
        <ul className="">
            <li><a href="">Fluoride Treatment</a></li>
            <li><a href="">Cavity Filling</a></li>
            <li><a href="">Teath Whitening</a></li>
        </ul>
      </div>
      <div>
      <h6>OUR ADDRESS</h6>
        <p>New York - 101010 Hudson</p>
      </div>
    </div>
    <div className="copyright">
      <p>Copyright 2022 All Rights Reserved</p>
    </div>
   </div>
  );
};

export default Footer;