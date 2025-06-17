import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const Course = () => {
    const data = useLoaderData();


    return (
        <div className='max-w-11/12 mx-auto mt-10 '>
            <title>Courses</title>
            <h2 className='text-center text-3xl md:text-4xl font-bold'>All Courses</h2>
            <p className='text-center text-gray-500 mt-3 md:px-20'>Explore a variety of expertly designed courses to build your skills and boost your career.
                Whether you're a beginner or an advanced learner, find the right course tailored just for you.</p>
            <div className='grid grid-cols-1 mt-5 md:mt-8 md:grid-cols-3 md:gap-5'>
                {
                    data.map(course =>
                        <div key={course._id}>
                            <div className="p-5 hover:bg-emerald-100 border mt-5 border-gray-300 rounded-lg MD:w-96 shadow-sm">

                                <img
                                    className='md:w-96 md:h-52 rounded-lg'
                                    src={course.image}
                                    alt="" />

                                <div className="mt-3">
                                    <h2 className="text-xl md:text-2xl font-semibold">{course.title.length === 25 ? course.title : course.title.slice(0, 25) + '...'}</h2>
                                    <div className='flex justify-between text-gray-500 my-4'>
                                        <p className='flex items-center gap-1'><span className=' text-gray-700'>Instructor:</span> {course.instructor}</p>
                                        <p><span className='text-gray-700'>Total Seat:</span> {course.totalSeats}</p>
                                    </div>

                                    <div className=" justify-end">
                                        <Link to={`/courses/${course._id}`}>
                                            <button className="btn text-white text-lg font-semibold hover:bg-green-500 bg-emerald-300 w-full">Details</button>
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

export default Course;