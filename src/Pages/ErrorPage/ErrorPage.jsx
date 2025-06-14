import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    const style = {
        container: {
            fontFamily: '"Edu SA Hand", cursive'
        }
    }

    return (
        <div className='text-center rounded-xl p-5 bg-gray-100 my-20 border border-gray-500 md:p-10 mx-16 md:mx-80' style={style.container}>
            <h1 className='text-2xl text-emerald-600 md:text-9xl font-semibold'>404</h1>
            <p className='text-xl mt-3 text-emerald-600 md:text-5xl font-medium'>Oops! Page not found</p>
            <Link to={'/'}><button className='btn text-white mt-5 md:mt-10 bg-emerald-400 '>Go back home</button></Link>
        </div>
    );
};

export default ErrorPage;