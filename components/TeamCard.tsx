interface Props {
    imgSrc: string;
    first: string;
    last: string;
    job: string;
    description: string;
}

const team_img_urls = {
    nick: 'https://www.foreverwild.media/wp-content/uploads/2020/11/IMG_1956-e1606363284958.jpg',
    karlie: 'https://www.foreverwild.media/wp-content/uploads/2020/11/IMG_1956-e1606363284958.jpg',
    porter: 'https://www.foreverwild.media/wp-content/uploads/2020/11/IMG_1956-e1606363284958.jpg',
    lino: 'https://www.foreverwild.media/wp-content/uploads/2020/11/IMG_1956-e1606363284958.jpg',
    sean: 'https://www.foreverwild.media/wp-content/uploads/2020/11/IMG_1956-e1606363284958.jpg'
}

const TeamCard = ({ imgSrc, first, last, job, description }: Props) => {
    return (

        <div className={`relative flex flex-col shadow-lg object-cover mb-10 mx-auto rounded-md hover:shadow-2xl transition-all duration-200`}>
            <div className={`bg-cover rounded-md h-96 w-96`}>
                <img alt="team" className="absolute object-cover top-0 left-0 h-full w-full rounded-md z-0" src={imgSrc} />

            </div>
            <div className="absolute top-0 left-0 h-full w-full transition-all z-20 rounded-md duration-200 hover:bg-white hover:bg-opacity-90">
                <div className="absolute flex flex-col justify-evenly items-center top-0 left-0 h-full w-full transition-all duration-200 text-transparent hover:text-black">
                    <span className="text-xl">{first}</span>
                    <span className="text-center h-ful w-full px-4">
                        {description}
                    </span>
                </div>
            </div>
            <div className="h-full w-full flex flex-col justify-end z-10 items-end text-black pr-4">
                <span className="font-bold">{first} {last}</span>
                <span className="font-light">{job}</span>
            </div>
            <div className="absolute bottom-0 bg-white bg-opacity-50 h-14 w-full"></div>
        </div>
    )
}

export default TeamCard