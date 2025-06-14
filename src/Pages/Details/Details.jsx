import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { IoTimeOutline } from 'react-icons/io5';
import { useLoaderData } from 'react-router';

const Details = () => {

    const data = useLoaderData();

    const { title, image, description, instructor, duration, createdAt, totalSeats, enrolledCount} = data;

    return (
        <div className='max-w-11/12 my-10 border border-gray-300 p-5 rounded-lg mx-auto'>
            <div className='md:w-3/4 md:mx-auto'>
                <img className='h-96 w-full mx-auto' src={image} alt="" />
                <h2 className='text-2xl md:text-4xl mt-3 font-bold'>{title}</h2>
                <div className='md:flex mt-3 justify-between'>
                    <p className='font-bold'>Instructor: <span  className='font-semibold'>{instructor}</span></p>
                    <p className='font-bold'>Description: <span className='font-semibold'>{description}</span></p>
                </div>
                <div className='flex mt-3 justify-between'>
                    <p className='flex font-bold items-center gap-1'><IoTimeOutline/> <span className='font-semibold'>{duration} Days</span></p>
                    <p className='flex font-bold items-center gap-1'><FaRegCalendarAlt /> {createdAt.split("T")[0]}</p>
                </div>
                <div className='flex mt-3 justify-between'>
                    <p className='font-semibold'>Available: <span  className='font-semibold'>{totalSeats} seat</span></p>
                    <p className='flex items-center font-semibold gap-1'>Enrolled: <span className='flex items-center font-bold gap-1'><FaUserGroup /> {enrolledCount}</span></p>
                </div>
                <button className='btn w-full mt-3 bg-emerald-300 text-lg text-white font-bold'>Enroll</button>
            </div>
        </div>
    );
};

export default Details;