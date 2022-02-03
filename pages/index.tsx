import Hero from "../components/Hero";
import About from "../components/About";
import Spacer from "../components/Spacer";
import ImageBreak from '../components/ImageBreak'
import Services from "../components/Services";
import Team from "../components/Team";
import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const bgImage = "/images/home/bg-img.png";

export default function Home() {
  const [innerWidth, setInnerWidth] = useState<Number>()


  useEffect(() => {
    !innerWidth ? setInnerWidth(window.innerWidth) : undefined
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setInnerWidth(newWidth);
    };
    window.addEventListener('resize', updateWindowDimensions)

    return () => window.removeEventListener('resize', updateWindowDimensions)

  }, [])
  return (
    <div>
      <Hero innerWidth={innerWidth} />
      <Spacer />
      <About />
      <ImageBreak />
      <Spacer />
      <Services />
      <Spacer />
      <Team />
      <Spacer />
      <Contact />
      <Spacer />
      <Footer />
    </div>
  );
}