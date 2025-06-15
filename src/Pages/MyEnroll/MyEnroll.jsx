import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const MyEnroll = () => {
    const { user } = use(AuthContext)
    const [dataUser, setDataUser] = useState([]);
    const [allCourses, setAllCourses] = useState([]);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [count, setCount] = useState(0);
    const [countSeat, setCountSeat] = useState(0);
    // const [dataId, setDataId] = useState('');


    useEffect(() => {
        fetch('http://localhost:3000/enrolled-user')
            .then(res => res.json())
            .then(data => {
                const filteredItems = data.filter(item => item.email === user?.email);
                setDataUser(filteredItems);
            })
    }, [user]);


    useEffect(() => {
        fetch('http://localhost:3000/course')
            .then(res => res.json())
            .then(data => {
                setAllCourses(data);
            })
    }, []);



    useEffect(() => {

        const enrolledIds = dataUser.map(item => item.id);

        const filtered = allCourses.filter(course => enrolledIds.includes(course._id));
        setEnrolledCourses(filtered);
        // setDataId(enrolledIds)

    }, [dataUser, allCourses]);


    useEffect(() => {
        enrolledCourses.map(course => {
            setCount(course.enrolledCount)
            setCountSeat(course.availableSeat)
        })

    }, [enrolledCourses])


    // console.log(dataId)
    // console.log(dataUser)



    const enrollHandleDelete = (_id) => {

        setEnrolledCourses(prevCourses => prevCourses.filter(course => course._id !== _id));

        fetch(`http://localhost:3000/enrolled-user/enroll/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.error('Enroll Cancel')

                }
                setCount(count - 1)
                setCountSeat(countSeat + 1)
            })
    }
console.log(enrolledCourses)
    return (
        <div className='max-w-11/12 mx-auto my-10'>

            {
                enrolledCourses.length === 0 ?

                    <div className='text-center border border-emerald-500 px-5 py-10 md:mx-52'>
                        <h2 className='font-bold mb-3 md:mb-6 text-2xl md:text-4xl'>You have not enrolled in any courses yet.</h2>
                        <Link to={'/course'}> <button className='btn bg-emerald-400 text-white'>Browse Courses</button></Link>
                    </div>

                    :
                    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                        <table className="table">

                            <thead>
                                <tr className='bg-rose-500 text-white'>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                enrolledCourses.map(course =>

                                    < tbody key={course._id} className='border-b border-b-gray-200' >

                                        <tr className=''>

                                            <td className='md:text-lg font-bold'>{course.title}</td>
                                            <td>{course.description}</td>
                                            <td className='md:flex space-y-2 justify-end'>

                                                <button onClick={() => enrollHandleDelete(course?._id)} className='btn hover:bg-red-600  bg-red-400 text-white'>Remove Enrollment</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                )}
                        </table>
                    </div>
            }

        </div >
    );
};

export default MyEnroll;