import { useEffect, useRef, useState } from "react";
import { VscAdd, VscClose } from "react-icons/vsc";
import { FAQData } from "./FAQData";

const FAQ = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <section className="faq flex flex-col items-center text-[#775547] mb-20">
      <h2 className="text-3xl font-bold italic mb-8">FAQ</h2>
      {FAQData.map((FAQ, i) => {
        return (
          <div
            className="faq w-[90%] py-4 cursor-pointer border-b-[1px] border-[#DB5071] lg:w-[70%] 2xl:w-[60%]"
            onClick={() => toggle(i)}
            key={FAQ.id}
          >
            <div className="question flex justify-between items-center">
              <h3 className="text-lg font-bold">{FAQ.question}</h3>
              <div className="text-xl text-[#775547]">
                {clicked === i ? <VscClose /> : <VscAdd />}
              </div>
            </div>
            <div
              className={`answer overflow-hidden transition duration-500 ${
                clicked === i
                  ? "max-h-[300px] opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-4"
              }`}
            >
              <p className="pt-4 text-sm">{FAQ.answer}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FAQ;
