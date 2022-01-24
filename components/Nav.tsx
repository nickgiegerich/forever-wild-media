import { ReactNode } from "react";
import Link from 'next/link';

const LINKS = ["Home", "Services", "About", "Team", "Contact"];
const logoImg = "/images/logos/fwm.png";

function Nav() {

    return (
        <header className="border-b border-gray-400 relative sm:sticky top-0 z-20 bg-white shadow-lg">
            <div className="flex items-center justify-evenly mx-auto max-w-7xl px-4 pb-2 pt-4 md:pt-6">
                <div className="max-w-lg w-full">
                    <Link href={"/"} passHref>
                        <a className="cursor-pointer">
                            <h1 className="flex no-underlinee">
                                <img
                                    height="64"
                                    width="64"
                                    alt="logo"
                                    className="h-10 w-10 mr-1 object-contain"
                                    src="/images/logos/fwm.png"
                                />
                                <span className="text-xl font-primary font-bold tracking-tight pt-1">
                                    Forever Wild Media
                                </span>
                            </h1>
                        </a>
                    </Link>
                </div>

                    {LINKS.map((lnk, idx) => (
                        <div key={idx} className="max-w-xs w-1/2 text-center sm:text-right">
                            <Link href={`/${lnk}`}>
                                <h1>
                                    <a className=" cursor-pointer">
                                        <span className="text-xl font-primary font-bold tracking-tight pt-1 hover:underline">
                                            {lnk}
                                        </span>
                                    </a>
                                </h1>
                            </Link>
                        </div>

                    ))}
            </div>
        </header>
    )
}

export default Nav;
