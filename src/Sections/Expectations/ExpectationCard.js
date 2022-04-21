const Card = ({ img, alt, title, description }) => {
  return (
    <div className="card flex flex-col items-center justify-center text-center p-4 xl:flex-row xl:text-left">
      <img src={img} alt={alt} className="h-[50px]" />
      <div className="flex flex-col items-center xl:items-start xl:ml-4">
        <h2 className="font-bold my-2">{title}</h2>
        <p className="text-sm w-[80%] flex-1 xl:w-[100%]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
