import cupcakes from "../assets/cupcakes.png";
import MainBtn from "../components/MainBtn";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <section className="hero overflow-x-hidden h-full text-[#775547] font-OpenSans min-h-[100vh]">
      <Navbar />;
      <div className="content flex flex-col justify-evenly items-center h-[80vh]">
        <h1 className="text-6xl text-center italic w-[70%] lg:w-[55%] xl:w-[45%] 2xl:text-7xl 2xl:w-[42%]">
          We are baking for your{" "}
          <span className="text-[#DB5071]">pleasure</span>
        </h1>
        <p className="w-[60%] text-center md:w-full font-bold">
          Enjoy your indulgent Afternoon Tea in the comfort of your own home
        </p>
        <MainBtn text="Give me yummies" />
        <img
          src={cupcakes}
          alt="group of cupcakes in a line"
          className="xl:w-[900px]"
        />
      </div>
    </section>
  );
};

export default Hero;
