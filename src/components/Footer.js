import logo from "../assets/logo.svg";
import { CgCopyright } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="footer bg-[#775547] text-white flex justify-center items-center">
      <div className="content flex justify-evenly w-[70%]">
        <div className="content flex flex-col justify-center items-center">
          <div className="name flex justify-center items-center">
            <img src={logo} alt="cupcake logo" />
            <span className="flex flex-col items-center mt-4">
              <h2 className="font-DancingScript font-bold text-2xl">
                Cake O' Clock
              </h2>
              <p className="text-[.6rem] tracking-widest">BAKERY HOUSE</p>
            </span>
          </div>
          <div className="copyright text-center flex justify-center items-center text-xs text-[#CDC9C3] my-4">
            <CgCopyright />
            <p className="ml-2">2022 VictorMtzCodes</p>
          </div>
        </div>
        <ul className="hidden xl:flex justify-between items-center">
          <li className="item mx-6 p-4 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="item mx-6 p-4 cursor-pointer">
            <a href="#aboutus">About Us</a>
          </li>
          <li className="item mx-6 p-4 cursor-pointer">
            <a href="#cupcakes">Choose Goodies</a>
          </li>
          <li className="item mx-6 p-4 cursor-pointer">
            <a href="#delivery">Delivery</a>
          </li>
          <li className="item mx-6 p-4 cursor-pointer">
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
