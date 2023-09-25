import { NavLink} from "react-router-dom";
import Logo from "./logo";
import Banner from "../Banner/Banner";


const Navbar = () => {
    // const location = useLocation();
    // const isHomePage = location.pathname === '/';

    // const backgroundImageUrl = isHomePage
    //     ? 'url(https://i.ibb.co/10yxKjS/Rectangle-4281.png)'
    //     : '';

    // const backgroundStyles = {
    //     backgroundImage: backgroundImageUrl,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center',
    //     opacity: isHomePage ? 0.5 : 1,
    // };



    return (
        // <div className="min-h-screen{ isHomePage && style={backgroundStyles}} ">
        // <div style={isHomePage ? backgroundStyles : {}} className="min-h-screen">


        // <div className="  hero-overlay bg-white bg-opacity-90"></div>

        <nav className="flex justify-between mx-32 py-8 z-10">
            <div className="">
                <Logo></Logo>
            </div>
            <div className="">
                <ul className="flex justify-around gap-4 ">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
            /* banner div  */ 
            // <div>
            //     {
            //         isHomePage && <Banner></Banner>
            //     }
            // </div>
        // </div >
    );
};

export default Navbar;