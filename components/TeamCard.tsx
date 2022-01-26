interface Props {
    imgSrc: string;
    name: string;
    job: string;
    description: string;
}

const TeamCard = () => {
    return (

        <div className={`flex flex-col shadow-lg object-cover mb-10 mx-auto rounded-md hover:shadow-2xl transition-all duration-200`}>
            <div className="bg-nick bg-cover flex-col justify-items-end justify-self-end items-end h-96 w-96">
                {/* <img
                    className="h-full w-full object-cover rounded-md shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-200 overflow-hidden"
                    src="https://www.foreverwild.media/wp-content/uploads/2020/11/IMG_1956-e1606363284958.jpg"
                /> */}
                <div className="h-full w-full">title</div>
            </div>
        </div>
    )
}

export default TeamCard