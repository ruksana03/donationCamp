


const Banner = () => {
    return (


        <div className="relative top-0 ">
            <div className="hero min-h-screen" style={{
                backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
                backgroundPosition: 'top',
          
            }}>
                <div className="hero-overlay bg-[white] bg-opacity-95"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" flex flex-col justify-center items-center text-center">
                        <h1 className="mb-5 text-black text-5xl font-bold">I Grow By Helping People In Need</h1>


                        <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
                            <input
                                type="text"
                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#FF444A] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                required
                            />
                            <button
                                className="!absolute right-1 top-1 select-none rounded bg-[#FF444A] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white hover:shadow-lg hover:shadow-[#FF444A] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            >
                                Search
                            </button>
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FF444A] peer-focus:before:border-t-2 peer-focus:before:border-l-1 peer-focus:before:!border-[#FF444A] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#FF444A] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Search here....
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;