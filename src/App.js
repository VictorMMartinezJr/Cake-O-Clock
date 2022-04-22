import "./App.css";
import Aboutus from "./Sections/Aboutus";
import Cards from "./Sections/Cards/Cards";
import Hero from "./Sections/Hero";
import { cardsData } from "./Sections/Cards/cardsData";
import Swiper from "./Sections/Swiper";
import { LimitedEditionData, SwiperData } from "./CarouselData";
import Expectations from "./Sections/Expectations";
import FAQ from "./Sections/FAQ";

function App() {
  return (
    <div className="App">
      <Hero />
      <Cards data={cardsData} />
      <Aboutus />
      <Swiper data={SwiperData} title="Choose your favorite flavors" />
      <Expectations />
      <FAQ />
      <Swiper data={LimitedEditionData} title="Limited edition flavors" />
    </div>
  );
}

export default App;
