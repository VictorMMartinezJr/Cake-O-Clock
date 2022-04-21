import "./App.css";
import Aboutus from "./Sections/Aboutus";
import Cards from "./Sections/Cards/Cards";
import Hero from "./Sections/Hero";
import { cardsData } from "./Sections/Cards/cardsData";
import Swiper from "./Sections/Swiper";
import { SwiperData } from "./CarouselData";
import Expectations from "./Sections/Expectations";

function App() {
  return (
    <div className="App">
      <Hero />
      <Cards data={cardsData} />
      <Aboutus />
      <Swiper data={SwiperData} title="Choose your favorite flavors" />
      <Expectations />
    </div>
  );
}

export default App;
