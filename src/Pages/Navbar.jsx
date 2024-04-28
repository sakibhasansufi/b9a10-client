import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);
    return (

        <nav className="flex items-center   sticky top-0 z-50 bg-slate-50 justify-between px-4 py-2 text-black ">
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-black transition-all duration-200 hover:scale-110">
                <h2>Logo</h2>
            </div>
            <ul className="hidden items-center justify-between gap-10 md:flex">
                <Link to='/'>
                    <li className="group flex  cursor-pointer flex-col">
                        Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </Link>
                <Link to='/all'>
                    <li className="group flex  cursor-pointer flex-col">
                        All Arts and Craft<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                </Link>
                <Link to='/add'>
                    <li className="group flex  cursor-pointer flex-col">
                        Add Item<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </Link>
                <Link to='/item'>
                    <li className="group flex  cursor-pointer flex-col">
                        My List<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                </Link>

                <li className="group flex  cursor-pointer flex-col ">
                    <Link to='/login'>
                        <button className="rounded-lg border-2 border-black px-4 py-3 text-sm text-black duration-200 hover:bg-black hover:text-white">
                            Sign In<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    </Link>

                </li>
                <li className="group flex  cursor-pointer flex-col">
                    <Link to='/register'>
                        <button className="rounded-lg border-2 border-black px-4 py-3 text-sm text-black duration-200 hover:bg-black hover:text-white">
                            Register<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </button>

                    </Link>


                </li>
            </ul>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        <Link to='/'>
                            <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                                Home
                            </li>
                        </Link>

                        <Link to='/all'>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                All Arts and Craft
                            </li>
                        </Link>
                        <Link to='/add'>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                Add Item
                            </li>
                        </Link>

                        <Link to='/item'>

                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                My List
                            </li>
                        </Link>

                        <Link to='/login'>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                Sign In
                            </li>
                        </Link>
                        <Link to='/register'>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                Register
                            </li>
                        </Link>


                    </ul>
                )}
            </div>
        </nav>

    );
};

export default Navbar;