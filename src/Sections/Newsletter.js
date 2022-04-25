import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  // on submit form
  const formSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="expect flex flex-col justify-center items-center font-OpenSans text-[#775547] mb-8">
      <h2 className="text-3xl font-bold italic text-center mb-4 2xl:text-5xl">
        Sign up for our Newsletter
      </h2>
      <p className="text-sm mb-8">
        Sign up for our newsletter for the latest updates!
      </p>
      <form
        className="flex justify-center items-center relative lg:w-[40%]"
        onSubmit={formSubmit}
      >
        <label
          htmlFor="email-input"
          className={`absolute text-sm left-0 transition-[top] top-[50%] -translate-y-[50%] ${
            focused || email !== "" ? "-top-1" : ""
          }
          }`}
        >
          Your email
        </label>
        <input
          type="email"
          id="email-input"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`bg-transparent border-[#DB5071] py-2 border-b-[1px] outline-none ${
            focused && "border-b-[3px] border-[#DB5071]"
          } lg:w-full`}
        />

        <button
          type="submit"
          className="bg-[#DB5071] text-white text-sm px-8 py-2"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
