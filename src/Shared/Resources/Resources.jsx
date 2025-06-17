import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Loader from '../Loader/Loader';

const Resources = () => {
    const { loading } = use(AuthContext)
    const [resData, setResData] = useState([])

    useEffect(() => {
        fetch('https://server-side-taupe-three.vercel.app/resources')
            .then(res => res.json())
            .then(data => setResData(data))
    }, [])

    return (
        <div>
            {loading ? <h2></h2> :
                <div className='max-w-11/12 mx-auto my-10'>
                    <h2 className='text-center text-3xl md:text-4xl mb-5 font-bold'>Resources</h2>
                    <p className='text-center text-gray-500 mt-3 md:px-20'>Access valuable learning materials and tools curated to support your course journey.From tutorials to guides, find everything you need to succeed right here.</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5'>
                        {
                            resData.map(res =>
                                <div key={res._id} className="bg-white border border-gray-200 rounded-xl mt-4 p-5 shadow hover:shadow-lg transition-all space-y-3 max-w-md mx-auto">
                                    {/* Title + Type */}
                                    <div className="flex justify-between items-start">
                                        <h2 className="text-xl font-bold text-gray-800">{res.title}</h2>
                                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">{res.type}</span>
                                    </div>


                                    <p className="text-sm text-gray-600">{res.description}</p>


                                    <div className="flex flex-wrap gap-2">
                                        {res.tags.map(tag => (
                                            <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>


                                    <div className="text-xs text-gray-500 flex flex-wrap justify-between border-t pt-3">
                                        <p>
                                            <span className="font-medium">By:</span>{res.author}
                                        </p>
                                        <p>
                                            <span className="font-medium">Level:</span>{res.level}
                                        </p>
                                        <p>{res.published}</p>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Resources;