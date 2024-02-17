import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Section2.scss";
import loc from "../../../../assets/location.png";
import phone from "../../../../assets/phoneNumber.png";
import email from "../../../../assets/email.png";
import { useForm } from "react-hook-form";

const Section2 = () => {
  const location = useLocation();
  const [emailAddress, setEmailAddress] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmailAddress(emailParam);
    }
  }, [location.search]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger, // Destructure trigger function
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission (send email, save to Excel sheet, etc.)
    console.log(data);
  };

  return (
    <div className="py-9 responsive w-11/12 mx-auto">
      <div className="container mx-auto  rounded-lg w-full md:w-auto flex flex-col lg:flex-row items-center gap-12 ">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col">
            <h3 className="text-black-500 large-text">Get in Touch</h3>
            <span className="text-black-200">
              Ready to find your dream home or have any questions about our real
              estate services? We're here to help! Feel free to get in touch
              with our dedicated team of real estate professionals.
            </span>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-4">
              <div>
                <img src={loc} alt="" />
              </div>
              <span>
                <h5 className="text-black-100">Location</h5>
                <h2 className="text-black-500 medium-text">
                  158, Ikotun - Idimu Road, Nobex Bus <br />
                  Stop, Idimu, Lagos
                </h2>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img src={phone} alt="" />
              </div>
              <span>
                <h5 className="text-black-100">Phone Number</h5>
                <h2 className="text-black-500 medium-text">
                  08029074622 | 09032328531
                </h2>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img src={email} alt="" />
              </div>
              <span>
                <h5 className="text-black-100">Email Address</h5>
                <h2 className="text-black-500 medium-text">{emailAddress}</h2>
              </span>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 md:p-8 border border-[#ebebeb] rounded-lg">
          <h2 className="text-black-500 large-text mb-2">Quick Contact</h2>
          <p className="text-black-100 mb-4">Drop us a message</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full border border-[#ebebeb] rounded-md p-2"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border border-[#ebebeb] rounded-md p-2"
                onBlur={() => trigger("email")}
                value={emailAddress} // Add this line to set the value of the input field
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block mb-1">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                {...register("subject")}
                className="w-full border border-[#ebebeb] rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                className="w-full border border-[#ebebeb] rounded-md p-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-400 text-white-100 py-2 px-4  hover:bg-black-600 transition duration-300"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section2;
