import React from 'react';

const AddCourse = () => {
    return (
        <div className='container mx-auto my-10 px-2'>

            <form className='border border-gray-200 rounded-lg p-10'>
                <h2 className='text-center font-bold text-3xl mb-5'>Add Course</h2>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Course Name</legend>
                    <input type="text" className="input w-full border border-gray-400" placeholder="Type course name" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Description</legend>
                    <textarea placeholder='Type here......' className='border border-gray-400 rounded-md  p-3' rows={5} name="" id=""></textarea>
                </fieldset>
                <div className='flex gap-3'>
                    <fieldset className="fieldset flex-1">
                        <legend className="fieldset-legend">Image URL</legend>
                        <input type="text" className="input w-full border border-gray-400" placeholder="https:/example.jpg" />
                    </fieldset>
                    <fieldset className="fieldset flex-1">
                        <legend className="fieldset-legend">Duration</legend>
                        <input type="number" className="input w-full border border-gray-400" placeholder="0" />
                    </fieldset>
                </div>
                <button className= 'btn w-full mt-4 text-white bg-emerald-300'>Add Course</button>

            </form>
        </div>
    );
};

export default AddCourse;