import { useLocation } from 'react-router-dom';
import Banner from '../Header/Banner/Banner';
import Navbar from '../Header/Navbar/Navbar';

const HomePageBanner = () => {
    const locationA = useLocation();
    const isHomePageA = locationA.pathname === '/';
    const isFilterDataPageB = locationA.pathname.includes('/filtered');
    return (
        <div className="relative grid h-[30rem] flex-col  overflow-hidden bg-white text-black">
            {/* Background Image */}
            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/10yxKjS/Rectangle-4281.png')] bg-cover bg-center shadow-none z-0">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-white/90"></div>
            </div>

           <div className='flex flex-col gap-2'>
             {/* Navbar */}
             <div className="z-10 ">
                <Navbar></Navbar>
            </div>

            {/* Banner */}
            {(isHomePageA || isFilterDataPageB) && (
                <div className="z-5 flex justify-evenly items-center">
                    <Banner></Banner>
                </div>
            )}
           </div>
        </div>
    );
};

export default HomePageBanner;
