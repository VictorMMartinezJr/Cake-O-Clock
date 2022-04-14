const Card = ({ img, alt, title, description }) => {
  return (
    <div className="card flex flex-col items-center justify-center text-center p-4">
      <img src={img} alt={alt} />
      <h2 className="font-bold my-2">{title}</h2>
      <p className="text-sm w-[80%] flex-1 xl:w-[60%] 2xl:w-[50%]">
        {description}
      </p>
    </div>
  );
};

export default Card;
