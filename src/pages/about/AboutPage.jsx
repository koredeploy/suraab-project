import WhySection from "../../layout/sharedLayout/why/WhySection";
import Testimonial from "../../layout/sharedLayout/testimonial/Testimonial";
import HeroSection from "./hero/HeroSection";
import MeetTeam from "./meetUs/MeetTeam";
import ContactUs from "../../layout/sharedLayout/contactus/ContactUs";
import SwiperCarousel from "../../layout/sharedLayout/swiperCarousel/SwiperCarousel";

const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <WhySection />
      <SwiperCarousel/>
      <MeetTeam />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default AboutPage;
