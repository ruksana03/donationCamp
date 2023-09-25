import { NavLink } from "react-router-dom";

const logo = () => {
    return (
        <div>
            <NavLink
             to='/' className={({isActive,isPending})=> isPending?"pending" : isActive? "hover:bg-violet-600 active:bg-violet-700":""}><img src="https://i.ibb.co/zRCKFPW/Logo.png" alt="" /></NavLink>
           
        </div>
    );
};

export default logo;