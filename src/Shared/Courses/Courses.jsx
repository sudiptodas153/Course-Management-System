import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { PiSeatBold } from 'react-icons/pi';
import { Link } from 'react-router';

const Courses = ({ data }) => {

    return (
        <div className='max-w-11/12 mx-auto mt-20 '>
            <h2 className='text-center text-3xl md:text-4xl font-bold'> Latest Courses</h2>
            <p className='text-center text-gray-500 mt-3 md:px-20'>Discover our latest course offerings designed to sharpen your skills and expand your knowledge.Stay updated with the newest additions — carefully curated for learners of all levels.</p>
            <div className='grid grid-cols-1 mt-5 md:mt-8 md:grid-cols-3 md:gap-5'>
                {
                    data.map(course =>
                        <div key={course._id}>

                            <div className="p-5 bg-gradient-to-b from-[#f50505] to-[#ee0707]  mt-5 rounded-lg md:w-96 h-60 md:h-96 shadow-sm"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${course.image})`,

                                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'
                                }}
                            >

                                {/* <img
                                    className='md:w-96 md:h-52 rounded-lg'
                                    src={course.image}
                                    alt="" /> */}

                                <div className="mt-16 md:mt-52">
                                    <h2 className="text-xl mb-5 text-white md:text-2xl font-semibold">{course.title.length === 29 ? course.title : course.title.slice(0, 29) + '...'}</h2>

                                    {/* <div className='flex justify-between text-gray-600 my-4'>
                                        <p className='flex  items-center gap-1'><IoTimeOutline /> {course.duration} Days</p>
                                        <p className='flex items-center gap-1'><FaRegCalendarAlt /> {course.createdAt.split("T")[0]}</p>
                                    </div> */}

                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="flex gap-1 items-center bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
                                            <IoTimeOutline /> {course.duration} Days
                                        </span>
                                        <span className="flex gap-1 items-center bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                                            <FaRegCalendarAlt /> {course.createdAt.split("T")[0]}
                                        </span>
                                    </div>

                                    <div className=" justify-end">
                                        <Link to={`/courses/${course._id}`}>
                                            <button className="btn w-full border-none py-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-white font-semibold hover:scale-105 transition transform">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div >
    );
};

export default Courses;