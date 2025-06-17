// import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
const EditCourse = () => {
    const data = useLoaderData()
    // console.log(data)


    // const { user } = use(AuthContext)
    const handleForm = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const courseData = Object.fromEntries(formData.entries());


        // console.log(courseData)
        fetch(`https://server-side-taupe-three.vercel.app/courses/edit/${data._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(courseData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    Swal.fire({
                        title: "Your Course update Successful",
                        icon: "success",
                        draggable: true
                    });

                }
            })

    }

    return (
        <div className='container mx-auto my-10 px-2'>
            <title>Edit Course</title>
            <form onSubmit={handleForm} className='border bg-emerald-100 border-gray-200 rounded-lg p-10'>
                <h2 className='text-center font-bold  text-3xl mb-5'>Update Course</h2>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend ">Course Name</legend>
                    <input type="text" name='title' className="input w-full border border-gray-400" defaultValue={data.title} placeholder="Type course name" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend ">Description</legend>
                    <textarea placeholder='Type here......' defaultValue={data.description} className='border border-gray-400 rounded-md w-full h-40 input p-3' name="description" id=""></textarea>
                </fieldset>
                <div className='md:flex gap-3'>
                    <fieldset className="fieldset flex-1">
                        <legend className="fieldset-legend  ">Image URL</legend>
                        <input type="text" name='image' className="input w-full border border-gray-400" defaultValue={data.image} placeholder="https:/example.jpg" />
                    </fieldset>
                    <fieldset className="fieldset flex-1">
                        <legend className="fieldset-legend ">Instructor Name</legend>
                        <input type="text" defaultValue={data.instructor} name='instructor' className="input w-full border border-gray-400" placeholder="Instructor name.." />
                    </fieldset>
                    <fieldset className="fieldset flex-1">
                        <legend className="fieldset-legend ">Duration <span className='text-gray-500'>(Days)</span></legend>
                        <input type="number" defaultValue={data.duration} name='duration' className="input w-full border border-gray-400" placeholder="0" />
                    </fieldset>
                </div>

                <div className='md:flex gap-3'>
                    <fieldset className="fieldset flex-1">
                        <legend className="fieldset-legend ">Total Seat</legend>
                        <input type="number" defaultValue={data.totalSeats} name='totalSeats' className="input w-full border border-gray-400" placeholder="0" />
                    </fieldset>
                    <fieldset className="fieldset flex-1 ">
                        <legend className="fieldset-legend ">Enrolled</legend>
                        <input type="number" defaultValue={data.enrolledCount} name='enrolledCount' className="input w-full border border-gray-400" placeholder="0" />
                    </fieldset>
                    <fieldset className="fieldset flex-1">
                        <legend className="fieldset-legend ">Available Seat</legend>
                        <input type="number" name='availableSeat' defaultValue={data.availableSeat} className="input w-full border border-gray-400" placeholder="0" />
                    </fieldset>
                </div>
                <button className='btn w-full mt-4  bg-emerald-300'>Update Course</button>

            </form>
        </div>
    );
};

export default EditCourse;