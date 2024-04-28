import { useContext, useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../firebase/FireBaseProvider';

const Navbar = () => {

    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    const { logout, user } = useContext(AuthContext);

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

                <Link to='/register'>
                    <li className="group flex  cursor-pointer flex-col">

                        <button className="rounded-lg border-2 border-black px-4 py-3 text-sm text-black duration-200 hover:bg-black hover:text-white">
                            Register<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </button>

                    </li>
                </Link>



                {user ?
                    <div className="dropdown dropdown-end ml-20  md:ml-72 lg:ml-0 ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL || "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {user?.displayName || "user not found"}
                                </a>
                            </li>
                            {/* <li><a>Settings</a></li> */}
                            <li><a onClick={logout}>Logout</a></li>
                        </ul>
                    </div>
                    :
                    <Link to='/login' className="rounded-lg border-2 border-black px-4 py-3 text-sm text-black duration-200 hover:bg-black hover:text-white">Login</Link>
                }




            </ul>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    
                    <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        {user ?
                            <div className=" dropdown-end ml-20  md:ml-72 lg:ml-0 ">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL || "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user?.displayName || "user not found"}
                                        </a>
                                    </li>
                                    {/* <li><a>Settings</a></li> */}
                                    <li><a onClick={logout}>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <Link to='/login' className="rounded-lg bg-green-500 px-6 py-2 ml-28 md:ml-56 lg:ml-0 text-[12px] font-semibold text-white duration-300 dark:hover:bg-green-950 sm:text-sm md:text-base ">Login</Link>
                        }
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

                        <Link to='/register'>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                Register
                            </li>
                        </Link>



                        


                        {/* <Link to='/login'>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                Sign In
                            </li>
                        </Link> */}


                    </ul>
                )}
            </div>
        </nav>

    );
};

export default Navbar;