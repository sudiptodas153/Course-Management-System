import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';



const layout = () => {
    return (
        <div className=''>
            <div className='sticky top-0 z-50'>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default layout;