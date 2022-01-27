import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

function Hero() {
    const [innerWidth, setInnerWidth] = useState<Number>()

    useEffect(() => {
        if (typeof window !== undefined) {
            const updateWindowDimensions = () => {
                const newWidth = window.innerWidth;
                setInnerWidth(newWidth);
            };
            window.addEventListener('resize', updateWindowDimensions)

            return () => window.removeEventListener('resize', updateWindowDimensions)
        }
    }, [])
    return (
        <div className='relative -mt-20 w-full h-1/2 object-contain'>
            <ReactPlayer
                url={`${innerWidth < 600 ? 'https://foreverwild.media/wp-content/uploads/2020/11/Forever-Wild-Media-Reel-45.mp4' : 'https://www.foreverwild.media/wp-content/uploads/2020/11/Forever-Wild-Media-Reel-1.mp4'}`}
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
                        // height="450"
                        // width="450"
                        alt="logo"
                        className="mr-1 object-contain"
                        src="/images/logos/logo-2.png"
                    />
                    <span className='text-3xl font-thin text-center'>
                        Engaging content for <span className='font-bold'>adventurous</span> minds.
                    </span>
                    {/* ADD BUTTON TO CONTACT FORM */}
                    <div>
                        <button className='bg-slate-200 bg-opacity-75 hover:bg-opacity-100 px-4 py-2 rounded-md text-black'>Contact Today</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;