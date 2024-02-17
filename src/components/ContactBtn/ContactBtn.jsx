import "./ContactBtn.scss";
import { useNavigate } from "react-router-dom";

const ContactBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="contact_btn lg:w-44 w-36 h-12">
      
      <button
        onClick={handleClick}
        className="bg-red-400 w-full h-full z-10  text-white-100 text-xl relative hover:border-2 border-white-100"
      >
        <span className="btn_effect"></span>
        <span className="">Contact Us</span>
      </button>
    </div>
  );
};

export default ContactBtn;
