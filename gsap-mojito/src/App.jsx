import { ScrollTrigger, SplitText } from "gsap/all";

import About from "./components/About";
import Art from "./components/Art";
import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/navbar";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  );
};

export default App;
