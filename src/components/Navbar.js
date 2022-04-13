import { useState } from "react";

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [navActive, setNavActive] = useState(false);

  return (
    <nav className="text-[#775547] flex justify-between items-center relative">
      {/* Empty div to center nav text */}
      <div></div>
      <span className="flex flex-col items-center">
        <h1 className="font-DancingScript font-bold text-2xl">Cake O' Clock</h1>
        <p className="text-xs tracking-widest font-Poppins">BAKERY HOUSE</p>
      </span>
      {/* Burger icon */}
      <button
        className="burger cursor-pointer transform -translate-x-2"
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
        }`}
      >
        <li className="my-2 p-1 cursor-pointer">Home</li>
        <li className="my-2 p-1 cursor-pointer">About us</li>
        <li className="my-2 p-1 cursor-pointer">Choose goodies</li>
        <li className="my-2 p-1 cursor-pointer">Delivery</li>
        <li className="my-2 p-1 cursor-pointer">FAQ</li>
        <li className="my-2 p-1 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
