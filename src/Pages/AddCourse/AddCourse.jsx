import React, { use } from 'react';
import './add.css'
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
const AddCourse = () => {
    const { user } = use(AuthContext)
    const handleForm = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const courseData = Object.fromEntries(formData.entries());
        courseData.addedBy = user.email
        courseData.addedByName = user.displayName
        // console.log(courseData)
        fetch('http://localhost:3000/course', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(courseData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Your Course add Successful",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            })
    }

    return (
        <div className='container mx-auto my-10 px-2'>

            <form onSubmit={handleForm} className='custom9 border border-gray-200 rounded-lg p-10'>
                <h2 className='text-center font-bold text-white text-3xl mb-5'>Add Course</h2>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-white">Course Name</legend>
                    <input type="text" name='title' className="input w-full border border-gray-400" placeholder="Type course name" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-white">Description</legend>
                    <textarea placeholder='Type here......' className='border border-gray-400 rounded-md w-full h-40 input p-3' name="description" id=""></textarea>
                </fieldset>
                <div className='md:flex gap-3'>
                    <fieldset className="fieldset flex-1">
                        <legend className="fieldset-legend text-white ">Image URL</legend>
                        <input type="text" name='image' className="input w-full border border-gray-400" placeholder="https:/example.jpg" />
                    </fieldset>
                    <fieldset className="fieldset flex-1">
                        <legend className="fieldset-legend text-white">Instructor Name</legend>
                        <input type="text" name='instructor' className="input w-full border border-gray-400" placeholder="Instructor name.." />
                    </fieldset>
                    <fieldset className="fieldset flex-1">
                        <legend className="fieldset-legend text-white">Duration <span className='text-gray-500'>(Days)</span></legend>
                        <input type="number" name='duration' className="input w-full border border-gray-400" placeholder="0" />
                    </fieldset>
                </div>

                <div className='md:flex gap-3'>
                    <fieldset className="fieldset flex-1">
                        <legend className="fieldset-legend text-white">Total Seat</legend>
                        <input type="number" name='totalSeats' className="input w-full border border-gray-400" placeholder="0" />
                    </fieldset>
                    <fieldset className="fieldset flex-1 ">
                        <legend className="fieldset-legend text-white">Enrolled</legend>
                        <input type="number" name='enrolledCount' className="input w-full border border-gray-400" placeholder="0" />
                    </fieldset>
                    <fieldset className="fieldset flex-1">
                        <legend className="fieldset-legend text-white">Available Seat</legend>
                        <input type="number" name='availableSeat' defaultValue={0} className="input w-full border border-gray-400" placeholder="0" />
                    </fieldset>
                </div>
                <button className='btn w-full mt-4 text-white bg-emerald-300'>Add Course</button>

            </form>
        </div>
    );
};

export default AddCourse;