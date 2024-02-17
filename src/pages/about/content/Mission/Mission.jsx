import missionImg from "../../../../assets/about_mission_img.svg";
import check from '../../../../assets/check.png';
import ContactBtn from "../../../../components/ContactBtn/ContactBtn";
import "./Mission.scss"

const Mission = () => {
  return (
    <div className="section2 py-8">
      <div className="flex flex-col lg:flex-row gap-24 items-center w-10/12 mx-auto">
        
        <img src={missionImg} alt="About Mission " className="lg:w-1/2" />

        <div className="grid grid-cols-1 gap-4">
          <h4 className="large-text text-black-200 text-center lg:text-left">
            Our Mission at Suraab Electricals
          </h4>
          <p className="medium-text text-center lg:text-left">
            our mission is to redefine excellence in electrical solutions,
            illuminating homes and lives with a commitment to safety,
            reliability, and innovation. We embark on this mission
          </p>

          <div className="flex lg:flex-row flex-col items-center gap-3">
            <img src={check} alt="" />
            <p className="medium-text text-center lg:text-left">We bring a level of craftsmanship to our projects that reflects our dedication to quality and precision.</p>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-3">
            <img src={check} alt="" />
            <p className="medium-text text-center lg:text-left">Subhar Electricals introduces innovative practices to enhance the efficiency and sustainability of electrical systems</p>
          </div>
          <div className="lg:m-0 mx-auto">
            <ContactBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
