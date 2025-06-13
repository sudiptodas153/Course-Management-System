import React from 'react';

const PopularCourses = ({data}) => {
    return (
        <div className='max-w-11/12 mx-auto mt-20'>
            <h2 className='text-center text-4xl font-bold'>Popular Courses</h2>
            <div className='grid grid-cols-1 md:mt-8 md:grid-cols-3 md:gap-10'>
                {
                    data.map(course =>
                        <div key={course._id}>
                            <div className="p-5 border border-gray-100 rounddelg w-96 shadow-sm">

                                <img
                                    className='w-96 h-52 rounded-lg'
                                    src={course.image}
                                    alt="" />

                                <div className="mt-3">
                                    <h2 className="text-2xl font-semibold">{course.title.length === 25 ? course.title : course.title.slice(0, 25) + '...'}</h2>
                                    <div className='flex justify-between my-4'>
                                        <p>Available Seat: {course.totalSeats}</p>
                                        <p>{course.createdAt}</p>
                                    </div>

                                    <div className=" justify-end">
                                        <button className="btn text-white text-lg font-semibold bg-emerald-300 w-full">Details</button>
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