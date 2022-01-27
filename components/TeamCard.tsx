interface Props {
    imgSrc: string;
    first: string;
    last: string;
    job: string;
    description: string;
}

const TeamCard = ({ imgSrc, first, last, job, description }: Props) => {
    return (

        <div className={`relative flex flex-col shadow-lg object-cover mb-10 mx-auto rounded-md hover:shadow-2xl transition-all duration-200`}>
            <div className={`bg-black bg-cover rounded-md h-96 w-96`}>
                <div className="h-full w-full flex flex-col justify-end items-end text-black pr-4">
                    <span className="font-bold">{first} {last}</span>
                    <span className="font-light">{job}</span>
                </div>
            </div>
            <div className="absolute top-0 left-0 h-full w-full transition-all rounded-md duration-200 hover:bg-black hover:bg-opacity-90">
                <div className="absolute flex flex-col justify-evenly items-center top-0 left-0 h-full w-full transition-all duration-200 text-transparent hover:text-white">
                    <span className="text-xl">{first}</span>
                    <span className="text-center h-ful w-full px-4">
                        {description}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TeamCard