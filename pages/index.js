import Hero from "../components/Hero";
import About from "../components/About";
import Spacer from "../components/Spacer";
const bgImage = "/images/home/bg-img.png";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Spacer />
      <About />
    </div>
  );
}
