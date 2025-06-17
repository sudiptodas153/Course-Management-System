import React, { useEffect, useState } from 'react';
import { FaUserGraduate } from 'react-icons/fa';

const UpcomingCourse = () => {

    const [newCourses, setNewCourses] = useState([])

    useEffect(() => {
        fetch('https://server-side-taupe-three.vercel.app/upcomingCourse')
            .then(res => res.json())
            .then(data => setNewCourses(data))
    }, [])
    // console.log(newCourses)
    return (
        <div className='my-10 md:mt-20 max-w-11/12 mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-bold'>UpComing Courses</h2>
            <p className='text-center text-gray-500 mt-3 md:px-20'>Stay ahead with our upcoming courses – carefully crafted to match future trends and skills in demand.Get ready to explore what’s coming next and be the first to enroll!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 mt-10'>
                {
                    newCourses.map(soon =>
                        <div key={soon._id}>
                            <div className="flex items-center gap-3 md:gap-5 border border-gray-500 p-2 mt-4 md:p-5 bg-base-100 rounded-lg shadow-sm">

                                <img
                                    className='rounded-lg w-36 md:w-44 h-64 md:h-56'
                                    src={soon.imageUrl}
                                    alt="" />

                                <div className="space-y-3 ">
                                    <div>
                                        <h2 className="text-xl mb-4 md:text-3xl font-bold">{soon.title}</h2>
                                        <p className='text-xs md:text-[16px]'>{soon.description}</p>
                                    </div>
                                    <div className='md:flex text-center md:gap-2 items-center justify-between '>
                                        <p className='flex items-center justify-center gap-2 text-xs md:w-full mt-2 md:text-[13px]  px-2 py-1 text-green-500 bg-green-100 font-bold rounded-lg'><FaUserGraduate /> {soon.instructor}</p>
                                        <p className='text-xs md:w-full mt-2 md:text-[13px]  px-2 py-1 text-yellow-500 bg-yellow-100 font-bold rounded-lg'>Duration: {soon.duration}</p>
                                    </div>
                                    <div className='md:flex text-center md:gap-2 items-center justify-between '>
                                        <p className='text-xs md:w-full mt-2 md:text-[13px] px-2 py-1 text-pink-500 bg-pink-100 font-bold rounded-lg'>{soon.status}</p>
                                        <p className='text-xs md:w-full mt-2 md:text-[13px] px-2 py-1 text-blue-500 bg-blue-100 font-bold rounded-lg'>Format: {soon.format}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default UpcomingCourse;