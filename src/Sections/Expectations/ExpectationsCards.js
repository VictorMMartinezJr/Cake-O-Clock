import ExpectationCard from "./ExpectationCard";

const Cards = ({ data }) => {
  return (
    <div className="cards text-[#775547] flex justify-center items-center mb-12 font-OpenSans flex-1">
      <div className="grid grid-cols-1 row-auto gap-4 w-[80%] md:grid-cols-3 xl:grid-cols-1">
        {data.map((card) => {
          return (
            <ExpectationCard
              key={card.id}
              img={card.img}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
