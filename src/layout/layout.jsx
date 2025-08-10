
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import Loader from '../Shared/Loader/Loader';
import { useContext } from 'react';



const layout = () => {
    const {loading } = useContext(AuthContext);


    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className=''>
            <div className='sticky top-0 z-60'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default layout;