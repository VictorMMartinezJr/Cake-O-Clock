import { useState } from "react";

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [navActive, setNavActive] = useState(false);

  return (
    <nav className="text-[#775547] flex justify-between items-center relative md:flex-col">
      {/* Empty div to center nav text */}
      <div className="md:hidden"></div>
      <span className="flex flex-col items-center mt-4 md:after:bg-[#775547] md:after:h-[1px] md:after:w-[300%] md:after:my-2 lg:after:w-[45vw]">
        <h1 className="font-DancingScript font-bold text-2xl">Cake O' Clock</h1>
        <p className="text-xs tracking-widest font-Poppins">BAKERY HOUSE</p>
      </span>
      {/* Burger icon */}
      <button
        className="burger cursor-pointer transform -translate-x-2 md:hidden"
        onClick={() => {
          setBurgerActive(!burgerActive);
          setNavActive(!navActive);
        }}
      >
        <div
          className={`line1 w-6 h-[2px] bg-[#775547] m-1 transition transform ${
            burgerActive
              ? "-rotate-[45deg] -translate-x-[5px] translate-y-[6px]"
              : ""
          }`}
        ></div>
        <div
          className={`line2 w-4 h-[2px] bg-[#775547] m-1 transition ${
            burgerActive ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`line1 w-6 h-[2px] bg-[#775547] m-1 transition transform ${
            burgerActive
              ? "rotate-[45deg] -translate-x-[5px] -translate-y-[6px]"
              : ""
          }`}
        ></div>
      </button>
      {/* Nav links */}
      <ul
        className={` bg-[#e0c1bf] w-full absolute flex flex-col items-end right-0 top-full pr-2 font-Poppins transition transform ${
          navActive ? "translate-x-0" : "translate-x-full"
        } md:relative md:translate-x-0 md:flex-row md:items-center md:pr-0 md:w-[70%] md:justify-between md:bg-transparent lg:w-[60%]`}
      >
        <li className="my-2 p-1 md:mr-4 cursor-pointer">Home</li>
        <li className="my-2 p-1 md:mr-4 cursor-pointer">About us</li>
        <li className="my-2 p-1 md:mr-4 cursor-pointer">Choose goodies</li>
        <li className="my-2 p-1 md:mr-4 cursor-pointer">Delivery</li>
        <li className="my-2 p-1 md:mr-4 cursor-pointer">FAQ</li>
        <li className="my-2 p-1 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
