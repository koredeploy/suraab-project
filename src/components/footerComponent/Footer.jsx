import { Link } from "react-router-dom";
import { useEffect } from "react"; // Import the useEffect hook
import ContactBtn from "../ContactBtn/ContactBtn";
import "./Footer.scss";
import logo from '../../assets/new-logo.png'

const Footer = () => {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle link click
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="bg-black-200 text-white-100 py-10">
      <div
        className="grid lg:grid-cols-3 grid-cols-1 py-6 gap-8 w-11/12 responsive"
      >
        <div className="flex flex-col gap-5 items-start">
          <Link to="/" onClick={handleLinkClick}>
            <img className=""
              src={logo}
              alt=""
            />
          </Link>
          <p className="text-start ">
            Join me as I share timeless secrets on how to build your own academy
            that generates millions monthly.
          </p>
          <ContactBtn />
        </div>
        <div className="flex flex-col lg:ps-20 gap-5 items-start">
          <h2 className="medium-text font-semibold">Quick Links</h2>
          <ul className="flex flex-col gap-3 justify-start items-start">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" onClick={handleLinkClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={handleLinkClick}>
                Service
              </Link>
            </li>
            <li>
              <Link to="/contactus" onClick={handleLinkClick}>
                {" "}
                Contact Us{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 items-start ">
          <h2 className="medium-text font-semibold text-center lg:text-start">
            Contact Us
          </h2>
          <p className="text-start w-11/12 ">
            158, Ikotun - Idumu Road, Nobex Bus Stop, Idumu Lagos.
          </p>
          <p className="text-start">08029074622</p>
          <p className="text-start">09032528531</p>
        </div>
      </div>
      <hr className="bg-gray-500" />
      <p className="text-center text-gray-500 mt-3 text-sm">
        CopyRight {new Date().getFullYear()}, All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
