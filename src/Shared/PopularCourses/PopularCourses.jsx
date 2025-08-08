import React, { useEffect, useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { Link } from 'react-router';

const PopularCourses = () => {

    const [popularData, setPopularData] = useState([])

    useEffect(() => {
        fetch('https://server-side-taupe-three.vercel.app/top-courses')
            .then(res => res.json())
            .then(data => setPopularData(data))
    }, [])

    return (
        <div className='max-w-11/12 mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-bold'>Popular Courses</h2>
            <p className='text-center dark:text-white text-gray-500 mt-3 md:px-20'>Check out the most enrolled and top-rated courses by our learners.
                These trending courses are trusted by many — join the crowd and start learning today!</p>
            <div className='grid grid-cols-1 md:grid-cols-4 md:gap-3'>
                {
                    popularData.map(course =>
                        <div key={course._id}>
                            <div className="p-2 mt-5 border border-gray-200 rounded-lg shadow-xl">


                                <div className="mt-3 ">
                                    <h2 className="text-xl px-4 md:text-2xl font-semibold">{course.title.length === 15 ? course.title : course.title.slice(0, 15) + '...'}</h2>
                                    <div className=' p-3 rounded-lg'>
                                        <img
                                            className='md:w-96 border border-gray-300 md:h-52 rounded-lg'
                                            src={course.image}
                                            alt="" />
                                    </div>

                                    <div className='flex px-4 justify-between my-4 '>
                                        <p className='flex items-center font-semibold gap-1'><span className='flex items-center font-bold gap-1'><FaUserGroup size={20} />{course.enrolledCount}</span></p>
                                        <p className='flex font-bold items-center gap-1'>Available: {course.availableSeat}</p>
                                    </div>

                                    <div className="px-4">
                                        <Link to={`/courses/${course._id}`}>
                                            <button className="btn border-1 text-emerald-400 border-emerald-400 hover:text-white text-lg font-semibold hover:border-none hover:bg-emerald-400 w-full">Details</button>
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