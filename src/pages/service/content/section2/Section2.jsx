import s1 from "../../../../assets/service_img1.png";
import s2 from "../../../../assets/service_img2.png";
import s3 from "../../../../assets/service_img3.png";
import check from "../../../../assets/check.png";
import "./Section2.scss";
import ContactBtn from "../../../../components/ContactBtn/ContactBtn";
const Section2 = () => {
  return (
    <div className="sec2">
      <div className="responsive w-11/12 mx-auto py-12">
        <h1 className="text-center large-text w-1/2 pb-5 mx-auto">
          Explore Our Services Suraab Electricals
        </h1>
        <div className="grid grid-cols-1 gap-20">
          <div className="flex flex-col lg:flex-row gap-5 items-center ">
            <img
              src={s1}
              alt=""
              className="border-img border-8 border-white-100 "
            />
            <div className="grid grid-cols-1 gap-3">
              <h4 className="large-text">Electrical Troubleshooting</h4>
              <p className="medium-text">
                Lorem ipsum dolor sit amet consectetur. Eget fames dignissim dui
                eu quam quisque nunc in. Nam auctor vulputate ultrices
                tincidunt. Mus quis dignissim adipiscing viverra et. Rutrum sit
                sem pellentesque laoreet arcu nisl imperdiet. Sodales lectus
                consequat dignissim facilisis in at in vivamus magna.
              </p>
              <h4>Our Installation Methods</h4>
              <div className="flex gap-2 items-center">
                <span>
                  <img src={check} alt="" />
                </span>
                <p className="medium-text">
                  We bring a level of craftsmanship to our projects that
                  reflects our dedication to quality and precision.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <img src={check} alt="" />
                </span>
                <p className="medium-text">
                  Subhar Electricals introduces innovative practices to enhance
                  the efficiency and sustainability of electrical systems.
                </p>
              </div>
              <ContactBtn/>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 items-center ">
            <img
              src={s2}
              alt=""
              className="border-img border-8 border-white-100 "
            />
            <div className="grid grid-cols-1 gap-3">
              <h4 className="large-text">Electrical Troubleshooting</h4>
              <p className="medium-text">
                Lorem ipsum dolor sit amet consectetur. Eget fames dignissim dui
                eu quam quisque nunc in. Nam auctor vulputate ultrices
                tincidunt. Mus quis dignissim adipiscing viverra et. Rutrum sit
                sem pellentesque laoreet arcu nisl imperdiet. Sodales lectus
                consequat dignissim facilisis in at in vivamus magna.
              </p>
              <h4>Our Installation Methods</h4>
              <div className="flex gap-2 items-center">
                <span>
                  <img src={check} alt="" />
                </span>
                <p className="medium-text">
                  We bring a level of craftsmanship to our projects that
                  reflects our dedication to quality and precision.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <img src={check} alt="" />
                </span>
                <p className="medium-text">
                  Subhar Electricals introduces innovative practices to enhance
                  the efficiency and sustainability of electrical systems.
                </p>
              </div>
                <ContactBtn/>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 items-center ">
            <img
              src={s3}
              alt=""
              className="border-img border-8 border-white-100 "
            />
            <div className="grid grid-cols-1 gap-3">
              <h4 className="large-text">Electrical Troubleshooting</h4>
              <p className="medium-text">
                Lorem ipsum dolor sit amet consectetur. Eget fames dignissim dui
                eu quam quisque nunc in. Nam auctor vulputate ultrices
                tincidunt. Mus quis dignissim adipiscing viverra et. Rutrum sit
                sem pellentesque laoreet arcu nisl imperdiet. Sodales lectus
                consequat dignissim facilisis in at in vivamus magna.
              </p>
              <h4 className="medium-text font-bold  ">
                Our Installation Methods
              </h4>
              <div className="flex gap-2 items-center">
                <span>
                  <img src={check} alt="" />
                </span>
                <p className="medium-text">
                  We bring a level of craftsmanship to our projects that
                  reflects our dedication to quality and precision.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <img src={check} alt="" />
                </span>
                <p className="medium-text">
                  Subhar Electricals introduces innovative practices to enhance
                  the efficiency and sustainability of electrical systems.
                </p>
              </div>
              <ContactBtn/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
