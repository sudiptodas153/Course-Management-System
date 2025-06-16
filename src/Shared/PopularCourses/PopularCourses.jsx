import React, { useEffect, useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { Link } from 'react-router';

const PopularCourses = () => {

    const [popularData, setPopularData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/top-courses')
            .then(res => res.json())
            .then(data => setPopularData(data))
    }, [])

    return (
        <div className='max-w-11/12 mx-auto  mt-20'>
            <h2 className='text-center text-3xl md:text-4xl font-bold'>Popular Courses</h2>
            <div className='grid grid-cols-1 md:mt-8 md:grid-cols-3 md:gap-5'>
                {
                    popularData.map(course =>
                        <div key={course._id}>
                            <div className="p-5 mt-5 bg-emerald-50  border border-pink-300  rounded-lg md:w-96 shadow-sm">

                                <div className=' bg-white p-3 rounded-lg'>
                                    <img
                                        className='md:w-96 md:h-52 rounded-lg'
                                        src={course.image}
                                        alt="" />
                                </div>

                                <div className="mt-3 ">
                                    <h2 className="text-xl md:text-2xl font-semibold">{course.title.length === 25 ? course.title : course.title.slice(0, 25) + '...'}</h2>
                                    <div className='flex justify-between my-4 text-gray-600'>
                                        <p className='flex items-center font-semibold gap-1'><span className='flex items-center font-bold gap-1'><FaUserGroup size={20} />{course.enrolledCount}</span></p>
                                        <p className='flex items-center gap-1'><FaRegCalendarAlt  size={20}/> {course?.createdAt?.split("T")[0]}</p>
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

export default PopularCourses;