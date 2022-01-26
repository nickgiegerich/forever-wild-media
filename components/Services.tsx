import ServiceCard from "./ServiceCard";

function Services() {

    return (
        <div className="flex flex-col justify-evenly items-center">
            <span className="text-4xl font-semibold uppercase">what we do</span>
            <span className="text-center text-2xl font-sans text-opacity-75 text-gray-600 max-w-md md:max-w-6xl py-10 leading-relaxed">
                Driving Technology for Leading Brands
            </span>
            <div className="flex justify-evenly space-x-4 max-w-7xl">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    )
}

export default Services;