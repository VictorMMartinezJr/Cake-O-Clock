import "./App.css";
import Aboutus from "./Sections/Aboutus";
import Cards from "./Sections/Cards/Cards";
import Hero from "./Sections/Hero";
import Swiper from "./Sections/Swiper";
import { SwiperData } from "./CarouselData";

function App() {
  return (
    <div className="App">
      <Hero />
      <Cards />
      <Aboutus />
      <Swiper data={SwiperData} title="Choose your favorite flavors" />
    </div>
  );
}

export default App;
