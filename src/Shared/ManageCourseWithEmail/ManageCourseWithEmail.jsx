import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const ManageCourseWithEmail = () => {
    const { user } = use(AuthContext)

    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/course')
            .then(res => res.json())
            .then(data => {
                const filteredItems = data.filter(item => item.addedBy === user?.email);

                setDataUser(filteredItems)
            })
    }, [setDataUser, user?.email])

    // console.log(dataUser)

    const handleDelete = (id) =>{
        console.log(id)
    }


    return (
        <div className='max-w-11/12 mx-auto my-10'>

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

                            <tbody key={course._id} className='border-b border-b-gray-400'>

                                <tr className=''>

                                    <td className='md:text-lg font-bold'>{course.title}</td>
                                    <td>{course.description}</td>
                                    <td className='md:flex space-y-2 justify-end'>
                                        <button className='btn md:mr-3 bg-emerald-300 text-white'>Edit</button>
                                        <button onClick={()=>handleDelete(course._id)} className='btn bg-red-600 text-white'>Delete</button>
                                    </td>
                                </tr>

                            </tbody>
                        )}
                </table>
            </div>


        </div>
    );
};

export default ManageCourseWithEmail;