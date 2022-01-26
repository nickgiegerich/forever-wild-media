import TeamCard from "./TeamCard";

function Team() {

    return (
        <div className="flex flex-col justify-evenly items-center">
            <span className="text-4xl font-semibold uppercase">our team</span>
            <div className="flex flex-col max-w-sm md:flex-row justify-evenly md:space-x-4 md:max-w-7xl">
               <TeamCard/>
            </div>
        </div>
    )
}

export default Team;