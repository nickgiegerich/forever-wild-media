import { ReactNode, useEffect, useState } from "react";
import Link from 'next/link';

const LINKS = ["Home", "Services", "About", "Team", "Contact"];
const logoImg = "/images/logos/fwm.png";

function Nav() {
    const [showMenu, setShowMenu] = useState(false)
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.scrollY);
        };
    }, [])

    return (
        <header className={`top-0 bg-transparent text-slate-100 transition-all duration-300 fixed w-full z-20 ${offset > 85 ? "scale-1 bg-white text-black shadow-2xl py-3" : "py-5"} `}>
            <div className="flex items-center justify-evenly mx-auto max-w-7xl px-4">
                <div className="max-w-lg w-1/2">
                    <Link href={"/"} passHref>
                        <a className="cursor-pointer">
                            <h1 className="flex no-underlinee">
                                <img
                                    height="64"
                                    width="64"
                                    alt="logo"
                                    className={`h-10 w-10 mr-1 object-contain transition-all duration-300 ${offset > 85 ? "scale-100" : "scale-150"}`}
                                    src="/images/logos/fwm.png"
                                />
                                {/* <span className="text-xl font-primary font-bold tracking-tight pt-1">
                                    Forever Wild Media
                                </span> */}
                            </h1>
                        </a>
                    </Link>
                </div>

                {LINKS.map((lnk, idx) => (
                    <div key={idx} className="hidden md:flex max-w-xs w-1/2 text-center sm:text-right">
                        <Link href={`/${lnk}`}>
                            <h1>
                                <a className="cursor-pointer">
                                    <span className="text-xl font-semibold  pt-1 pb-2 transition-all duration-100 hover:border-b-2">
                                        {lnk}
                                    </span>
                                </a>
                            </h1>
                        </Link>
                    </div>

                ))}
                {/* <!-- Mobile menu button --> */}
                <div className="md:hidden flex items-center">
                    <button className="outline-none" onClick={() => setShowMenu(!showMenu)}>
                        <svg className={`w-10 h-10 hover:text-black ${offset > 85 ? "text-black" : "text-slate-100 "}`}
                            xlinkShow="!showMenu"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>

                        </svg>
                    </button>
                </div>
                {/* <!-- mobile menu --> */}
            </div>
            {showMenu && (
                <div className="md:hidden transition-all transform scale-y-100 bg-black">
                    <ul>
                        <li><a className="block text-sm px-2 py-4 text-black bg-blue-50 font-semibold hover:bg-orange-300 transition duration-300">Home</a></li>
                        <li><a className="block text-sm px-2 py-4 text-black bg-blue-50 font-semibold hover:bg-orange-300 transition duration-300">Services</a></li>
                        <li><a className="block text-sm px-2 py-4 text-black bg-blue-50 font-semibold hover:bg-orange-300 transition duration-300">About</a></li>
                        <li><a className="block text-sm px-2 py-4 text-black bg-blue-50 font-semibold hover:bg-orange-300 transition duration-300">Team</a></li>
                        <li><a className="block text-sm px-2 py-4 text-black bg-blue-50 font-semibold hover:bg-orange-300 transition duration-300">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Nav;
