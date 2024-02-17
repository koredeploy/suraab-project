import "./HeroSection.scss";
import arrow from "../../../../assets/arrow.png";

const HeroSection = () => {
  return (
    <div className="contact-bg">
      <div className="py-10 text-center">
        <h1 className="text-white-100 large-text">Contact</h1>
        <span className="flex justify-center items-center gap-2 py-5">
          <p className="text-black-100">Home</p>
          <span>
            <img src={arrow} alt="" />
          </span>
          <h5 className="text-white-100">Contact</h5>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
