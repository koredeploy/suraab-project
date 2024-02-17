import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contact-background flex flex-col items-center justify-center">
      <div className="text-white-100 py-10 text-center w-11/12 mx-auto grid grid-cols-1 gap-7">
        <h1 className="text-white-100 large-text ">
          Ready to Book Your First Service
        </h1>
        <p className="w-full lg:w-3/5 mx-auto medium-text ">
          Our mission is to redefine excellence in electrical solutions,
          illuminating homes and lives with a commitment to safety, reliability,
          and innovation. We embark on this mission
        </p>
        <div>
          <form action="" className="flex py-5 justify-center">
            <input
              type="text"
              name=""
              id=""
              className=" p-3 w-1/2 "
              placeholder="Your Email"
            />
            <button type="submit " className=" bg-red-400 p-3 ">
              Contact us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
