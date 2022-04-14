import Card from "../../components/Card";
import { cardsData } from "./cardsData";

const Cards = () => {
  return (
    <div className="cards text-[#775547] flex justify-center items-center mb-8 font-Poppins">
      <div className="grid grid-cols-1 row-auto gap-4 w-[90%] md:grid-cols-3">
        {cardsData.map((card) => {
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
