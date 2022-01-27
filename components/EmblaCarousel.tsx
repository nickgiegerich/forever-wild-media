import { Key, useCallback, useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton } from "./EmblaCarouselButtons";
import { media, mediaByIndex } from "./media";

const EmblaCarousel = ({ slides, options = { loop: false } }) => {
    const autoplay = useRef(
        Autoplay(
            { delay: 3000, stopOnInteraction: false },
            (emblaRoot) => emblaRoot.parentElement
        )
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollNext = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
        autoplay.current.reset();
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
        autoplay.current.reset();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map(( index: number) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__inner">
                                <img
                                    className="embla__slide__img"
                                    src={mediaByIndex(index)}
                                    alt="slidez"
                                />
                            </div>
                        </div>
                    ))}
                    {/* <div className="embla__slide">Slide 1</div>
                    <div className="embla__slide">Slide 2</div>
                    <div className="embla__slide">Slide 3</div>
                    <div className="embla__slide">Slide 11</div>
                    <div className="embla__slide">Slide 21</div>
                    <div className="embla__slide">Slide 31</div>
                    <div className="embla__slide">Slide 12</div>
                    <div className="embla__slide">Slide 22</div>
                    <div className="embla__slide">Slide 32</div>
                    <div className="embla__slide">Slide 13</div>
                    <div className="embla__slide">Slide 23</div>
                    <div className="embla__slide">Slide 33</div> */}
                </div>
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
    );
}

export default EmblaCarousel;