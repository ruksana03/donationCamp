
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Header/Navbar/Navbar';
import HomePageBanner from '../components/HomePageBanner/HomePageBanner';
// import AllFilteredData from '../components/AllFilteredData/AllFilteredData';


const MainLayout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isFilterDataPage = location.pathname === '/filtered';
    return (
        <div>
            
            { isHomePage || isFilterDataPage ?<HomePageBanner></HomePageBanner> : <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;