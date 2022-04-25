import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import map from "../assets/map.png";

const Contacts = () => {
  return (
    <section className="expect flex justify-center items-center font-OpenSans text-[#775547]">
      <div className="content grid justify-center items-center w-[80%] xl:grid-cols-2 my-20">
        {/* Map image that only shows on desktop start */}
        <div
          className="hidden xl:inline-block h-full"
          style={{
            backgroundImage: `url(${map})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Map image end */}

        {/* Contacts start*/}
        <div className="flex flex-col justify-between xl:flex-1 xl:h-full">
          <h2 className="text-3xl font-bold italic text-center mb-4 2xl:text-5xl">
            Contacts
          </h2>
          <div className="contact flex flex-col items-center">
            <p className="font-bold">Info:</p>
            <p className="text-sm">229-200-3983</p>
            <p className="text-sm">support@cakeoclock.com</p>
          </div>
          <div className="location flex flex-col items-center my-4">
            <p className="font-bold">Location:</p>
            <p className="text-sm">16000 Oxford Alpharetta, Ga 30004</p>
          </div>
          <div className="hours flex flex-col items-center">
            <p className="font-bold">Operating Hours:</p>
            <p className="text-sm">Mon-Sun: 10:00 AM - 7:00 PM</p>
          </div>
          <ul className="socials flex justify-center items mt-4">
            <li className="bg-[#775547] ml-4 w-6 h-6 rounded-full flex justify-center items-center cursor-pointer">
              <FiFacebook className="text-white" />
            </li>
            <li className="bg-[#775547] ml-4 w-6 h-6 rounded-full flex justify-center items-center cursor-pointer">
              <FiInstagram className="text-white" />
            </li>
            <li className="bg-[#775547] ml-4 w-6 h-6 rounded-full flex justify-center items-center cursor-pointer">
              <FiTwitter className="text-white" />
            </li>
          </ul>
        </div>
        {/* Contacts end */}
      </div>
    </section>
  );
};

export default Contacts;
