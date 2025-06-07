import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

const links = <>
<NavLink><li>Home</li></NavLink>
<NavLink><li> Courses</li></NavLink>
<NavLink><li>Add Course</li></NavLink>

   </> 
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <a className="text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden md:flex ">
                    <ul className="menu menu-horizontal gap-8 px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-1">
                   <Link> <a className="text-blue-400 font-bold">Login</a></Link>
                    <p className='text-blue-500'>/</p>
                    <Link to={'/register'}><a className="text-blue-400  font-bold">Register</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;