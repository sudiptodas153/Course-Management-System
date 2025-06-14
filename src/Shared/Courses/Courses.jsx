import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { PiSeatBold } from 'react-icons/pi';
import { Link } from 'react-router';

const Courses = ({ data }) => {

    return (
        <div className='max-w-11/12 mx-auto mt-20 '>
            <h2 className='text-center text-3xl md:text-4xl font-bold'>Courses</h2>
            <div className='grid grid-cols-1 mt-5 md:mt-8 md:grid-cols-3 md:gap-5'>
                {
                    data.map(course =>
                        <div key={course._id}>
                            <div className="p-5 border mt-5 border-gray-100 rounded-lg MD:w-96 shadow-sm">

                                <img
                                    className='md:w-96 md:h-52 rounded-lg'
                                    src={course.image}
                                    alt="" />

                                <div className="mt-3">
                                    <h2 className="text-xl md:text-2xl font-semibold">{course.title.length === 25 ? course.title : course.title.slice(0, 25) + '...'}</h2>
                                    <div className='flex justify-between text-gray-600 my-4'>
                                        <p className='flex  items-center gap-1'><IoTimeOutline /> {course.duration} Days</p>
                                        <p className='flex items-center gap-1'><FaRegCalendarAlt /> {course.createdAt.split("T")[0]}</p>
                                    </div>

                                    <div className=" justify-end">
                                        <Link to={`/courses/${course._id}`}>
                                            <button className="btn text-white text-lg font-semibold bg-emerald-300 w-full">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Courses;