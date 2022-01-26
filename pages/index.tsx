import Hero from "../components/Hero";
import About from "../components/About";
import Spacer from "../components/Spacer";
import ImageBreak from '../components/ImageBreak'
import Services from "../components/Services";
import Team from "../components/Team";
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
      <Spacer/>
      <Team/>
    </div>
  );
}
