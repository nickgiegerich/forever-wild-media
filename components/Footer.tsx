import Spacer from "./Spacer";

function Footer() {

    return (
        <div className="w-screen bg-gray-800 text-gray-300 flex flex-row flex-wrap md:flex-nowrap justify-evenly">
            <span className="text-lg font-thin w-full text-center">
                for immediate production support contact us @: <br/>
                208-751-2185
            </span>
            <span className="text-lg font-thin w-full text-center">
                made with ♡ by the Forever Wild Team <br/>
                © 2020 - {new Date().getFullYear()}
            </span>
        </div>
    )
}

export default Footer;