interface Props {
    imgSrc: string;
    title: string;
    description: string;
    tags: string[];
}

const ServiceCard = ({ imgSrc, title, description, tags }: Props) => {
    return (

        <div className={`flex flex-col shadow-lg mb-10 mx-auto rounded-md hover:shadow-2xl transition-all duration-200`}>
            <div>
                <img alt="service" className="h-80 w-auto rounded-md shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-200 overflow-hidden" src={imgSrc} />
            </div>
            <div className="uppercase font-bold pt-10 text-2xl pl-2">
                {title}
            </div>
            <div className="text-left pl-2 py-5">
                <span>
                    {description}
                </span>
            </div>

            <div className=" border-t-2 w-11/12 mx-auto py-5">
                {tags.map((tag, idx) => (
                    <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                ))}

            </div>
        </div>
    )
}

export default ServiceCard;