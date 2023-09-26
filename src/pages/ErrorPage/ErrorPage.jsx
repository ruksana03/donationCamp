import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-evenly"> 
            <div className="flex flex-col justify-center gap-7 items-center text-center align-middle mt-6 border-8 border-rose-400 w-1/2 p-12">
            <h1 style={{ background: '-webkit-linear-gradient(left, #4A90E2, #FF4B2B, #FFD034)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className="text-6xl font-extrabold ">404 !!!</h1>

            <p style={{ background: '-webkit-linear-gradient(left, #4A90E2, #FF4B2B, #FFD034)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className="text-4xl font-bold p-2"> <span className="text-6xl">o</span><span className="text-5xl">o</span>ops !!! Page Not Found </p>

           <Link to={'/'}><button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-3xl font-semibold p-5 rounded-lg"> Return Home </button> </Link>

        </div>
        </div>
    );
};

export default ErrorPage;