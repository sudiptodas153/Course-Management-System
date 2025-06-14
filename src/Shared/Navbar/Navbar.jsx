import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../../assets/lottie/logo.png'
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { toast, ToastContainer } from 'react-toastify';
import './Navbar.css'
// import { div } from 'framer-motion/client';
const Navbar = () => {

    const { user, loading } = use(AuthContext)
    const navigate = useNavigate()
    const links = <>
        <NavLink to={'/'}><li>Home</li></NavLink>
        <NavLink to={'/course'}><li> Courses</li></NavLink>
        <NavLink to={'/addCourse'}><li>Add Course</li></NavLink>
        <NavLink to={'/Manage-courses'}><li>Manage Courses</li></NavLink>
        <NavLink to={'/My-enrolled-courses'}><li>My Enrolled Courses</li></NavLink>
       

    </>

    if(loading) {
        return <h2></h2>
    }


    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                toast.success('Logout successful')
                navigate('/')
            })
            .catch(() => { })
    }

    return (
        <div className=''>
            
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <img className='w-16' src={logo} alt="" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='hidden md:flex'>
                        <img className='w-20 ' src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden md:flex ">
                    <ul className="menu menu-horizontal font-bold gap-8 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-1">


                    {user ?
                        <div className='flex items-center gap-3'>
                            <div>
                                <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                            </div>
                            <button onClick={signOutUser} className='text-emerald-400  font-bold border btn border-emerald-400'>Logout</button>
                        </div>
                        :

                        <div className='flex gap-1'>
                            <Link to={'/login'}> <p className="text-emerald-400 font-bold">Login</p></Link>
                            <p className='text-emerald-500'>/</p>
                            <Link to={'/register'}><p className="text-emerald-400  font-bold">Register</p></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;