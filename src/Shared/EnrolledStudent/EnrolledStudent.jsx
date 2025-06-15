import React, { useEffect, useState } from 'react';

const EnrolledStudent = () => {
    const [enrollsUser, setEnrollsUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/enrolled-user')
            .then(res => res.json())
            .then(data => setEnrollsUser(data))
    }, [])

    return (
        <div className='max-w-11/12 mx-auto mt-10 mb-10'>
            <h2 className='text-center text-3xl md:text-4xl font-bold'>Recent Enrollments</h2>
            {
                enrollsUser.length === 0 ?

                    <div className='border md:py-10 py-6 mt-5 text-center md:mx-72 border-gray-300 rounded-lg px-5'>
                        <h2 className='text-2xl md:text-4xl font-bold text-red-600'>Nobody Enroll Course</h2>
                        <p className=' text-3xl text-red-500'>..........................................</p>
                    </div>
                    :

                    <div className="overflow-x-auto rounded-box border border-gray-200 mt-5">
                        <table className="table">
                            {/* head */}
                            <thead  className='bg-cyan-400 text-black'>
                                <tr >

                                    <th>Student Name</th>
                                    <th>Course Name</th>
                                    <th>Date</th>
                                    <th>Time</th>

                                </tr>
                            </thead >
                            {
                                enrollsUser.map(student =>
                                    <tbody className='border-b border-gray-200' key={student._id}>

                                        <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={student.image}
                                                                alt="student" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{student.name}</div>
                                                        <div className="text-sm opacity-50">{student.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>{student.courseName}</p>
                                            </td>
                                            <td>{student.date}</td>
                                            <td>{student.time}</td>

                                        </tr>

                                    </tbody>
                                )
                            }

                        </table>
                    </div>
            }
        </div>
    );
};

export default EnrolledStudent;