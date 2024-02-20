import "./HerosSection.scss";
import img from "../../../assets/arrow.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="about-bg flex items-center justify-center ">
      <div className="py-10 text-center">
        <h1 className="text-white-100 large-text pt-24 ">About</h1>
        <span className="flex justify-center items-center gap-2 py-5 ">
          <Link to="/">
            <p className="text-black-100 medium-text">Home</p>
          </Link>
          <span>
            <img src={img} alt="" />
          </span>
          <h5 className="text-white-100 ">About</h5>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
