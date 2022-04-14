import aboutus from "../assets/aboutus.jpg";

const Aboutus = () => {
  return (
    <section className="hidden 2xl:flex 2xl:justify-center 2xl:items-center 2xl:font-OpenSans 2xl:text-[#775547] h-[50vh]">
      <div className="h-full w-[80%] flex justify-center items-center">
        <div className="flex-1 h-full">
          <div
            className="object-contain w-[350px] rounded-tr-[30%] h-full bg-black mx-auto"
            style={{
              backgroundImage: `url(${aboutus})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="text flex flex-col justify-between items-center flex-1 h-full">
          <h2 className="italic text-6xl text-right">
            <span className="mr-20">Welcome to our</span>
            <br />
            cozy bakery
          </h2>
          <p className="w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam est
            quae quisquam. Possimus eius earum rem, quas nihil architecto
            nostrum a sapiente iste eveniet! At maiores quae dolorum laborum
            sit.
          </p>
          <p className="w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam est
            quae quisquam. Possimus eius earum rem, quas nihil architecto
            nostrum a sapiente iste eveniet! At maiores quae dolorum laborum
            sit.
          </p>
          <span className="w-[70%]">
            <h2 className="italic text-3xl">We hope to see you soon,</h2>
            <p className="">The fantastic team at Cake O'Clock Bakery House</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
