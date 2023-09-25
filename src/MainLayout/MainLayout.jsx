
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Header/Navbar/Navbar';
import HomePageBanner from '../components/HomePageBanner/HomePageBanner';


const MainLayout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <div>
            
            { isHomePage?<HomePageBanner></HomePageBanner> : <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;