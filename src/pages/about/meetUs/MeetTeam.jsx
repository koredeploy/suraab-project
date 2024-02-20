import "./MeetTeam.scss";
import frame1 from "../../../assets/about_us_frame1.png";
import frame2 from "../../../assets/about_us_frame2.png";
import frame3 from "../../../assets/about_us_frame3.png";
import frame4 from "../../../assets/about_us_frame4.png";
const MeetTeam = () => {
  return (
   <div  className="meet">
     <div className=" flex flex-col gap-4 pb-14">
      <div className="flex flex-col gap-4 justify-center text-center py-10">
        <h3 className="text-black-100 medium-text">Our Team</h3>
        <h1 className="text-black-500 large-text">Meet The Team</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-14 justify-center">
        <div className="text-center lg:text-start">
          <img src={frame1} alt="" className="w-full" />
          <div className="flex flex-col gap-1">
            <p className="py-1">Benjamin White</p>
            <h2 className="text-black-100 ">Electrician</h2>
          </div>
        </div>
        <div className="text-center lg:text-start">
          <img src={frame2} alt="" />
          <div className="flex flex-col gap-1">
            <p className="py-1">Benjamin White</p>
            <h2 className="text-black-100 ">Electrician</h2>
          </div>
        </div>
        <div className="text-center lg:text-start">
          <img src={frame3} alt="" />
          <div className="flex flex-col gap-1">
            <p className="py-1">Benjamin White</p>
            <h2 className="text-black-100 ">Electrician</h2>
          </div>
        </div>
        <div className="text-center lg:text-start">
          <img src={frame4} alt="" />
          <div className="flex flex-col gap-1">
            <p className="py-1">Benjamin White</p>
            <h2 className="text-black-100 ">Electrician</h2>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default MeetTeam;
