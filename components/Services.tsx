import ServiceCard from "./ServiceCard";

function Services() {

    return (
        <section id="Services" className="flex flex-col justify-evenly items-center">
            <span className="text-4xl font-semibold uppercase">what we do</span>
            <span className="text-center text-2xl font-sans text-opacity-75 text-gray-600 max-w-md md:max-w-6xl py-10 leading-relaxed">
                Driving Technology for Leading Brands
            </span>
            <div className="flex flex-col max-w-sm md:flex-row justify-evenly md:space-x-4 md:max-w-7xl">
                <ServiceCard
                    imgSrc="https://cdn.pixabay.com/photo/2017/08/06/06/25/technology-2589463_960_720.jpg"
                    title="content creation"
                    description="Great content begins with a powerful story, we work closely with our clients to help them realize their vision. Whether it's on mountains, rivers, or in the office our team creates captivating pieces that stick with the viewer."
                    tags={["photography", "videography", "postproduction", "commercial drone flights", "aerial imaging", "real estate",]}
                />
                <ServiceCard
                    imgSrc="https://foreverwild.media/wp-content/uploads/2020/11/designer-at-work-in-office-PH3N3LA-scaled.jpg"
                    title="web & mobile development"
                    description="We build more than websites. We have experience with single page sites to large scale data applications. There is no project too big or small, let us know what you need."
                    tags={["software dev", "app dev", "hosting", "maintenance", "consulting", "data apps",]}
                />
                <ServiceCard
                    imgSrc="https://foreverwild.media/wp-content/uploads/2020/11/team-of-creative-webgraphic-designer-planning-HWVH5SK-scaled.jpg"
                    title="brand & identity design"
                    description="Give people a reason to bring your business into their lives. Good design communicates who you are and what you stand for. We'll create an original and authentic brand to ensure that you break through and connect with clients seamlessly."
                    tags={["graphic design", "print design", "ux design", "social media", "digital communication"]}
                />
            </div>
        </section>
    )
}

export default Services;