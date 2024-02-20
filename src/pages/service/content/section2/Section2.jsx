import s1 from "../../../../assets/service_img1.png";
import s2 from "../../../../assets/service_img2.png";
import s3 from "../../../../assets/service_img3.png";
import check from "../../../../assets/check.png";
import "./Section2.scss";
import ContactBtn from "../../../../components/ContactBtn/ContactBtn";
const Section2 = () => {
  return (
    <div className="section-two">
      <div className="responsive w-11/12 mx-auto py-12">
        <h1 className="text-center large-text w-full lg:w-1/2 pb-9 mx-auto">
        Explore Our Services At <br /> Suraab Electricals
        </h1>
        <div className="grid grid-cols-1 gap-20">
          <div className="flex flex-col lg:flex-row gap-5 items-center ">
            <img
              src={s1}
              alt=""
              className="border-img border-8 border-white-100 "
            />
            <div className="grid grid-cols-1 gap-4">
              <h4 className="medium-text text-center lg:text-start">Electrical Troubleshooting</h4>
              <p className=" text-center lg:text-start w-full lg:w-11/12">
                Lorem ipsum dolor sit amet consectetur. Eget fames dignissim dui
                eu quam quisque nunc in. Nam auctor vulputate ultrices
                tincidunt. Mus quis dignissim adipiscing viverra et. Rutrum sit
                sem pellentesque laoreet arcu nisl imperdiet. Sodales lectus
                consequat dignissim facilisis in at in vivamus magna.
              </p>
              <h4 className="text-xl font-semibold text-center lg:text-start">Our Installation Methods</h4>
              <div className="flex  gap-2 items-center">
                <span>
                  <img src={check} alt="" />
                </span>
                <p className="w-full lg:w-1/2">
                  We bring a level of craftsmanship to our projects that 
                  reflects our dedication to quality and precision.
                </p>
              </div>
              <div className="flex gap-2 items-center ">
                <span>
                  <img src={check} alt="" />
                </span>
                <p className="pb-2 w-full lg:w-1/2">
                  Subhar Electricals introduces innovative practices to enhance
                  the efficiency and sustainability of electrical systems.
                </p>
              </div>
             <div className="flex justify-center lg:justify-start">
             <ContactBtn/>
             </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 items-center ">
            <img
              src={s2}
              alt=""
              className="border-img border-8 border-white-100 "
            />
            <div className="grid grid-cols-1 gap-3">
              <h4 className="medium-text text-center lg:text-start">Lighting Installations</h4>
              <p className="text-center lg:text-start w-full lg:w-11/12">
                Lorem ipsum dolor sit amet consectetur. Eget fames dignissim dui
                eu quam quisque nunc in. Nam auctor vulputate ultrices
                tincidunt. Mus quis dignissim adipiscing viverra et. Rutrum sit
                sem pellentesque laoreet arcu nisl imperdiet. Sodales lectus
                consequat dignissim facilisis in at in vivamus magna.
              </p>
              <h4 className="text-xl font-semibold text-center lg:text-start">Our Installation Methods</h4>
              <div className="flex gap-2 items-center">
                <span>
                  <img src={check} alt="" />
                </span>
                <p className="w-full lg:w-1/2">
                  We bring a level of craftsmanship to our projects that
                  reflects our dedication to quality and precision.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <img src={check} alt="" />
                </span>
                <p className="pb-2 w-full lg:w-1/2">
                  Subhar Electricals introduces innovative practices to enhance
                  the efficiency and sustainability of electrical systems.
                </p>
              </div>
                <div className="flex justify-center lg:justify-start">
                <ContactBtn/>
                </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 items-center ">
            <img
              src={s3}
              alt=""
              className="border-img border-8 border-white-100 "
            />
            <div className="grid grid-cols-1 gap-3">
              <h4 className="medium-text text-center lg:text-start">Electrical Maintenance</h4>
              <p className=" text-center lg:text-start pb-2 w-full lg:w-11/12">
              Lorem ipsum dolor sit amet consectetur. Fermentum ut arcu morbi turpis neque. Amet malesuada vivamus egestas rhoncus ultrices. Phasellus aliquam magna aliquam pellentesque pretium. Quis vitae molestie aliquam nibh tincidunt in quam vestibulum. Tortor eget varius diam mauris volutpat vitae urna. Adipiscing imperdiet interdum pellentesque nulla convallis mattis quam. Ultrices porttitor ridiculus ac sed odio vitae lorem. Pellentesque ac pulvinar magna aliquet dictumst. Nulla diam lorem id orci gravida. Quam dictum sed sit bibendum et congue vel dui. Egestas tincidunt nec sit rhoncus nibh. Quis risus vestibulum risus pretium in neque malesuada amet lobortis.Habitant molestie in eget et dictumst. Praesent eu sed sollicitudin urna tempor senectus eros. Placerat ut nunc.
              </p>
             
              <div className="flex justify-center lg:justify-start">
              <ContactBtn/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
