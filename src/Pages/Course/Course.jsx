import React, { useEffect, useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const Course = () => {
    const data = useLoaderData();


    const [courses, setCourses] = useState([]);


useEffect(() => {
  setCourses(data);
}, [data]);

const handleSort = (e) => {
  const selectedInstructor = e.target.value;

  if (selectedInstructor === "all") {
    setCourses(data);
  } else {
    const filtered = data.filter(course => course.instructor === selectedInstructor);
    setCourses(filtered);
  }
};

console.log(courses)

    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <div className='max-w-11/12 mx-auto mt-10 mb-10'>
            <title>Courses</title>
            <h2 className='text-center text-3xl md:text-4xl font-bold'>All Courses</h2>
            <p className='text-center dark:text-white text-gray-500 mt-3 md:px-20'>Explore a variety of expertly designed courses to build your skills and boost your career.
                Whether you're a beginner or an advanced learner, find the right course tailored just for you.</p>

            <div className='flex justify-end'>
                <select onChange={handleSort} className="select outline-0">
                    <option disabled value="">Instructor</option>
                    <option value="all">All</option>
                    <option value="Rafiul Hasan">Rafiul Hasan</option>
                    <option value="Tanvir Alam">Tanvir Alam</option>
                    <option value="Shamima Nahar">Shamima Nahar</option>
                </select>

            </div>
            <div className='grid grid-cols-1 mt-5 md:mt-8 md:grid-cols-3 md:gap-5'>
                {
                     courses.map(course =>
                        <div key={course._id}>
                            <div className="p-5 dark:hover:bg-base-300 hover:bg-emerald-100 border mt-5 border-gray-300 rounded-lg MD:w-96 shadow-sm">

                                <img
                                    className='md:w-96 md:h-52 rounded-lg'
                                    src={course.image}
                                    alt="" />

                                <div className="mt-3">
                                    <h2 className="text-xl md:text-2xl font-semibold">{course.title.length === 25 ? course.title : course.title.slice(0, 25) + '...'}</h2>
                                    <div className='flex justify-between dark:text-white text-gray-500 my-4'>
                                        <p className='flex items-center gap-1'><span className=' dark:text-white text-gray-700'>Instructor:</span> {course.instructor}</p>
                                        <p><span className='dark:text-white text-gray-700'>Total Seat:</span> {course.totalSeats}</p>
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