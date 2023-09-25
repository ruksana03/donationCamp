import React from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../Header/Banner/Banner';
import Navbar from '../Header/Navbar/Navbar';

const HomePageBanner = () => {
    const locationA = useLocation();
    const isHomePageA = locationA.pathname === '/';

    const backgroundImageUrl = isHomePageA
        ? 'url(https://i.ibb.co/10yxKjS/Rectangle-4281.png)'
        : '';

    const backgroundStyles = {
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: isHomePageA ? 0.5 : 1,
    };
    return (
        <div style={isHomePageA ? backgroundStyles : {}} className="min-h-screen z-0">
            <Navbar></Navbar>
             <div className="  hero-overlay bg-white bg-opacity-90"></div>
             

            <div>
                {
                    isHomePageA && <Banner></Banner>
                }
            </div>

        </div>
    );
};

export default HomePageBanner;