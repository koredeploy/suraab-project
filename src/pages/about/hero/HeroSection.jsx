import "./HerosSection.scss";
import img from "../../../assets/arrow.png";

const HeroSection = () => {
  return (
    <div className="about-bg flex items-center justify-center ">
      <div className="py-10 text-center">
        <h1 className="text-white-100 large-text pt-24">About</h1>
        <span className="flex justify-center items-center gap-2 py-5 ">
          <p className="text-black-100">Home</p>
          <span>
            <img src={img} alt="" />
          </span>
          <h5 className="text-white-100">Service</h5>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
