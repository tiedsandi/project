import { ScrollTrigger, SplitText } from "gsap/all";

import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default App;
