import { NavLink} from "react-router-dom";
import Logo from "./logo";

const Navbar = () => {
    return (
     <div className="z-0">
           <nav className="flex justify-between mx-32 px-5 items-center">
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
     </div>
    );
};

export default Navbar;