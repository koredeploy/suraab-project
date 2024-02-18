import { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactUs.scss";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const onSubmit = () => {
    // Redirect to the contact form page with the email address as a query parameter
    const encodedEmail = encodeURIComponent(email);
    navigate(`/contactus?email=${encodedEmail}`); // Use navigate instead of window.location.href
  };

  return (
    <div className="contact-background flex flex-col items-center justify-center">
      <div className="text-white-100 py-10 text-center w-11/12 mx-auto grid grid-cols-1 gap-7 responsive">
        <h1 className="text-white-100 large-text ">
          Ready to Book Your First Service
        </h1>
        <p className="w-full lg:w-3/5 mx-auto medium-text ">
          Our mission is to redefine excellence in electrical solutions,
          illuminating homes and lives with a commitment to safety, reliability,
          and innovation. We embark on this mission
        </p>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex py-5 justify-center w-5/6 mx-auto "
          >
            <div className="relative w-1/2 ">
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className="p-3 w-full text-black-500 py-5"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="absolute bottom-[-25px] left-0 text-white-500 text-sm">
                  {errors.email.type === "required" && "Email is required. "}
                  {errors.email.type === "pattern" && "Invalid email address. "}
                </div>
              )}
            </div>
            <button type="submit" className="bg-red-400 px-20  py-5">
              Contact us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
