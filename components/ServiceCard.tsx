const ServiceCard = () => {
    return (
        <div className="flex flex-col shadow-lg rounded-md mb-96 hover:shadow-2xl transition-all duration-200">
            <div>
                <img className="rounded-md shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-200 overflow-hidden" src="https://cdn.pixabay.com/photo/2017/08/06/06/25/technology-2589463_960_720.jpg" />
            </div>
            <div className="uppercase font-bold text-center pt-10 text-2xl">
                title
            </div>
            <div>
                videography | photography
            </div>
            <div>
                videography | photography
            </div>
            <div>
                videography | photography
            </div>
            <div>
                click for more info...
            </div>
        </div>
    )
}

export default ServiceCard;