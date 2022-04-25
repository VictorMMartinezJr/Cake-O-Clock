const MainBtn = ({ text }) => {
  return (
    <button className="relative my-8">
      <p>{text}</p>
      <div className="border border-[#DB5071] absolute h-14 w-[150%] rounded-[150%] top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] -rotate-[5deg]"></div>
      <div className="border border-[#DB5071] absolute h-14 w-[150%] rounded-[150%] top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"></div>
    </button>
  );
};

export default MainBtn;
