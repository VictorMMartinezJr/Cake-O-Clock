import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

const Swiper = ({ data, title }) => {
  const responsive = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  };

  // Next button
  const renderNextButton = () => {
    return (
      <img
        src={arrowRight}
        alt="right arrow"
        className="absolute top-[50%] right-0 z-[3] -translate-y-[50%] text-3xl cursor-pointer rounded-full"
      />
    );
  };

  // Previous button
  const renderPrevButton = () => {
    return (
      <img
        src={arrowLeft}
        alt="left arrow"
        className="absolute top-[50%] left-0 z-[3] -translate-y-[50%] text-3xl cursor-pointer rounded-full"
      />
    );
  };

  const items = data.map((cupcake) => {
    return (
      <div className="slide flex flex-col items-center" key={cupcake.id}>
        <img
          src={cupcake.img}
          alt={cupcake.alt}
          className="h-[200px] my-8 xl:h-[290px]"
        />
        <span className="flex justify-between items-center w-[90%] xl:w-[70%]">
          <p className="font-bold">{cupcake.name}</p>
          <p className="font-bold text-[#DB5071]">{cupcake.price}</p>
        </span>
      </div>
    );
  });

  return (
    <section className="carousel flex flex-col justify-center items-center font-OpenSans text-[#775547] my-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold italic mb-4">{title}</h2>
        <p>
          All Flavors are available through call in (minimum order of 3
          cupcakes)
        </p>
      </div>
      <div className="swiper-container w-[80%] relative">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          disableDotsControls
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          animationDuration={800}
          infinite
        />
      </div>
    </section>
  );
};

export default Swiper;
