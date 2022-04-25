import Card from "../../components/Card";

const Cards = ({ data }) => {
  return (
    <div className="cards text-[#775547] flex justify-center items-center font-OpenSans mb-20 xl:mb-40">
      <div className="grid grid-cols-1 row-auto gap-4 w-[80%] md:grid-cols-3">
        {data.map((card) => {
          return (
            <Card
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
