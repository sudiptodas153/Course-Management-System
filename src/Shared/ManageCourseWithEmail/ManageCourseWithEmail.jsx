import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const ManageCourseWithEmail = () => {
    const { user } = use(AuthContext)
    const accessToken = user.accessToken

    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        fetch('https://server-side-taupe-three.vercel.app/course', {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                const filteredItems = data.filter(item => item.addedBy === user?.email);

                setDataUser(filteredItems)
            })
    }, [setDataUser, user, accessToken])


    const reFetch = () => {
        fetch('https://server-side-taupe-three.vercel.app/course', {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                const filteredItems = data.filter(item => item.addedBy === user?.email);

                setDataUser(filteredItems)
            })
    }

    // console.log(dataUser)

    // DELETE

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-side-taupe-three.vercel.app/courses/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your course has been deleted.",
                                icon: "success"
                            });
                            reFetch()
                        }
                    })

            }
        });

    }

    // UPDATE




    return (
        <div className='max-w-11/12 mx-auto my-10'>

            {
                dataUser.length === 0 ?
                    <div className='text-center border border-emerald-500 px-5 py-10 md:mx-52'>
                        <h2 className='font-bold mb-3 md:mb-6 text-2xl md:text-4xl'>You have not add any courses yet.</h2>
                        <Link to={'/addCourse'}> <button className='btn bg-emerald-400 text-white'>Add Course</button></Link>
                    </div>

                    :
                    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='bg-emerald-500 text-white'>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                dataUser.map(course =>

                                    <tbody key={course._id} className='border-b border-b-gray-200'>

                                        <tr className=''>

                                            <td className='md:text-lg font-bold'>{course.title}</td>
                                            <td>{course.description}</td>
                                            <td className='md:flex space-y-2 justify-end'>
                                                <Link to={`/courses/edit/${course._id}`}>
                                                    <button className='btn md:mr-3 hover:bg-emerald-500 bg-emerald-300 text-white'>Edit</button></Link>
                                                <button onClick={() => handleDelete(course._id)} className='btn bg-red-600 text-white'>Delete</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                )}
                        </table>
                    </div>

            }
        </div>
    );
};

export default ManageCourseWithEmail;