import Hero from "../components/Hero";
import About from "../components/About";
import Spacer from "../components/Spacer";
import ImageBreak from '../components/ImageBreak'
import Services from "../components/Services";
const bgImage = "/images/home/bg-img.png";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Spacer />
      <About />
      <ImageBreak/>
      <Spacer/>
      <Services/>
    </div>
  );
}
