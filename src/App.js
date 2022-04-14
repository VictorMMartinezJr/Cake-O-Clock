import "./App.css";
import Aboutus from "./Sections/Aboutus";
import Cards from "./Sections/Cards/Cards";
import Hero from "./Sections/Hero";

function App() {
  return (
    <div className="App">
      <Hero />
      <Cards />
      <Aboutus />
    </div>
  );
}

export default App;
