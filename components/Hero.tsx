import ReactPlayer from 'react-player';
import Link from 'next/link';


function Hero({ innerWidth }) {


    return (
        <section id="Home" className='relative -mt-20 w-full h-1/2 object-contain'>
            <ReactPlayer
                url={`${innerWidth < 600 ? 'https://d3j236eev0fqaw.cloudfront.net/mobile-hero.mp4' : 'https://d3j236eev0fqaw.cloudfront.net/hero-bg-video.mp4'}`}
                playing
                loop
                playsinline
                muted
                width="100vw"
                height="100vh"
                style={{ 'objectFit': 'cover' }}
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50'>
                <div className='h-full flex flex-col justify-evenly items-center text-slate-100'>

                    <img
                        alt="logo"
                        className="mr-1 object-contain"
                        src="/images/logos/logo-2.png"
                    />
                    <span className='text-3xl font-thin text-center'>
                        Engaging content for <span className='font-bold'>adventurous</span> minds.
                    </span>
                    {/* ADD BUTTON TO CONTACT FORM */}
                    <div>
                        <Link href={'/#Contact'} passHref >
                            <a>
                                <button className='bg-slate-200 bg-opacity-75 hover:bg-opacity-100 px-4 py-2 rounded-md text-black'>
                                    Contact Today
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;