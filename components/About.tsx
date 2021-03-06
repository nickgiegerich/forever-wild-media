import EmblaCarousel from "./EmblaCarousel";
import Spacer from "./Spacer";

const SLIDE_COUNT = 100;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function About() {

    return (
        <div id="About" className="flex flex-col justify-evenly items-center">
            <span className="text-4xl font-semibold uppercase">who we are</span>
            <span className="text-center text-2xl font-sans text-opacity-75 text-gray-600 max-w-xs md:max-w-6xl py-10 leading-relaxed">
                We&apos;ve been helping brands develop and define their voice since 2016. The times may have changed, but our
                love for creativity and problem-solving hasn&apos;t. We&apos;re driven by technology and innovation to ensure we
                fulfill our key mission of helping our clients find their successful future. Get in touch so that we can
                kickstart your branding today.
            </span>
            <Spacer/>
            <span className="text-gray-500 font-light text-lg">Featured Clients</span>
            <EmblaCarousel slides={slides} options={{loop: true}}/>
        </div>
    )
}

export default About;