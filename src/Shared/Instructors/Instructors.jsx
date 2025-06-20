import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Loader from '../Loader/Loader';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Instructors = () => {
    const { loading } = use(AuthContext)
    const [insData, setInsData] = useState([])

    useEffect(() => {
        fetch('https://server-side-taupe-three.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInsData(data))
    }, [])



    return (
        <div>{loading ? <Loader></Loader> :
            <div className='my-10'>
                <h2 className='text-center text-3xl md:text-4xl font-bold mb-5'>Our Instructors</h2>
                <p className='text-center text-gray-500 mt-3 md:px-20'>Meet our experienced and passionate instructors, dedicated to your success.They bring real-world expertise and a love for teaching to every course they create.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 '>
                    {
                        insData.map(ins => <div key={ins._id}>
                            <div className="border border-gray-200 md:h-72 p-5 shadow-lg rounded-lg mt-3">
                                <div className=" flex md:justify-between">

                                    <div className='w-80'>
                                        <h1 className="text-3xl font-bold">{ins.name}</h1>
                                        <p className="py-2 pr-10 text-gray-400">{ins.bio}</p>
                                        <p className='font-bold text-[16px]'>Designation: <span className='text-gray-600 text-sm font-semibold'>{ins.designation}</span></p>
                                        <p className='font-bold text-[16px]'>Experience: <span className='text-gray-600 text-sm font-semibold'>{ins.experience}</span></p>
                                        <div>
                                            <h2 className='font-bold mt-1'>CoursesTaught:</h2>
                                            <ul className='list-disc list-inside ml-5 text-sm space-y-1 text-gray-600'>
                                                {
                                                    ins.coursesTaught.map(taught => <li key={taught}>
                                                        {taught}
                                                    </li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='text-center '>
                                        <div className='border md:w-26 border-emerald-500 rounded-full p-1'>
                                            <img
                                                src={ins.photo}
                                                className="w-20 h-[66px] md:h-24 md:w-24  rounded-full shadow-2xl"
                                            />
                                        </div>
                                        <p className='text-xs font-bold'>{ins.specialization}</p>

                                        <Rating
                                            initialRating={ins.rating}
                                            readonly
                                            emptySymbol={<FaRegStar color="#FFD700" size={20} />}
                                            fullSymbol={<FaStar color="#FFD700" size={20} />}
                                            placeholderSymbol={<FaStar color="#FFD700" size={20} />}
                                            fractions={2}
                                        />
                                        {/* className={`mask ${ins.rating === 4.6 && 'bg-amber-400'} bg-yellow-400 w-5 h-5 mask-star`} */}
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        }
        </div>
    );
};

export default Instructors;