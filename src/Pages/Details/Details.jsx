import React, { use, useEffect, useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { IoTimeOutline } from 'react-icons/io5';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Armchair } from 'lucide-react';
import Swal from 'sweetalert2';
// import { toast } from 'react-toastify';
import { BiSolidError } from 'react-icons/bi';

const Details = () => {
    const { user } = use(AuthContext)
    const data = useLoaderData();


    const [count, setCount] = useState(0);
    const [countSeat, setCountSeat] = useState(0);
    const [enrollUser, setEnrollUser] = useState([])



    const { _id, title, image, description, instructor, duration, availableSeat, createdAt, totalSeats, enrolledCount } = data;

    const isEnrolled = enrollUser.find(item => item.email === user?.email && item.id === _id);
    const enrollCount = enrollUser.filter(enroll => enroll?.email === user?.email).length;

    console.log(enrollCount)

    useEffect(() => {
        setCount(enrolledCount)
        setCountSeat(availableSeat)
    }, [])

    useEffect(() => {
        fetch('https://server-side-taupe-three.vercel.app/enrolled-user')
            .then(res => res.json())
            .then(data => setEnrollUser(data))
    }, [setEnrollUser])

    const EnrollUser = () => {
        fetch('https://server-side-taupe-three.vercel.app/enrolled-user')
            .then(res => res.json())
            .then(data => setEnrollUser(data));

    }

    const enrollHandle = () => {

        if (totalSeats === enrolledCount) {
            Swal.fire({
                title: "Unavailable Seat",
                icon: "warning",
                draggable: true
            });

        }

        else if (enrollCount >= 3) {
            Swal.fire({
                title: "You can't enroll in more than 3 courses",
                icon: "error",
                draggable: true
            });
        }

        else {
            const name = user.displayName;
            const email = user.email;
            const image = user.photoURL;
            const courseName = title;
            const id = _id;
            const formDate = date => {
                const dates = { day: '2-digit', month: 'short', year: 'numeric' }
                return date.toLocaleDateString('en-US', dates);
            }

            const today = new Date();
            const formattedDate = formDate(today);
            const date = formattedDate

            const times = new Date();
            const timeCount = {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            };
            const formattedTime = times.toLocaleTimeString('en-US', timeCount)
            const time = formattedTime
            const enrollUser = { id, name, email, image, courseName, date, time };
            fetch('https://server-side-taupe-three.vercel.app/enrolled', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(enrollUser)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: "Enroll successful",
                            icon: "success",
                            draggable: true
                        });
                    }
                    EnrollUser();
                    setCount(count + 1)
                    setCountSeat(countSeat - 1)

                })
        }
    }


    const enrollHandleDelete = (_id) => {

        fetch(`https://server-side-taupe-three.vercel.app/enrolled-user/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {


                if (data.deletedCount) {
                    Swal.fire({
                        title: "Enrollment Cancel",
                        icon: "error",
                        draggable: true
                    });
                }
                EnrollUser()
                setCount(count - 1)
                setCountSeat(countSeat + 1)
            })
    }


    return (
        <div className='max-w-11/12 my-10 border border-gray-300 p-5 rounded-lg mx-auto'>
            <title>Course Details</title>
            <div className='md:w-3/4 md:mx-auto'>
                <img className='h-96 w-full rounded-lg mx-auto' src={image} alt="" />
                <h2 className='text-2xl md:text-4xl mt-3 font-bold'>{title}</h2>
                <div className='md:flex mt-3 justify-between'>

                    <p className='font-bold'>Description: <span className='font-semibold'>{description}</span></p>
                    <p className='font-bold'>Instructor: <span className='font-semibold'>{instructor}</span></p>
                </div>
                <div className='flex mt-3 justify-between'>
                    <p className='flex font-bold items-center gap-1'><IoTimeOutline /> <span className='font-semibold'>{duration} Days</span></p>
                    <p className='flex font-bold items-center gap-1'><FaRegCalendarAlt /> {createdAt.split("T")[0]}</p>
                </div>
                <div className='flex mt-3 justify-between'>
                    <p className='flex items-center font-semibold gap-1'>Total Seat:  <span className='flex items-center font-bold gap-1'><Armchair size={18} /> {totalSeats}</span></p>
                    <p className='flex items-center font-semibold gap-1'>AvailableSeat:  <span className='flex items-center font-bold gap-1'>{countSeat}</span></p>
                    <p className='flex items-center font-semibold gap-1'>Enrolled:  <span className='flex items-center font-bold gap-1'><FaUserGroup />{count}</span></p>
                </div>
                {
                    isEnrolled?.email === user?.email && isEnrolled?.id == _id ?

                        <div className="tooltip w-full" data-tip="You are already enrolled. Click to cancel enrollment.">
                            <button
                                onClick={() => enrollHandleDelete(isEnrolled?._id)}

                                className="btn w-full mt-3 hover:bg-emerald-500 bg-emerald-300 text-lg text-white font-bold"
                            >
                                Enrolled
                            </button>
                        </div>
                        :
                        !user ?

                            <div className=" w-full" >
                                <button
                                    onClick={enrollHandle}
                                    disabled
                                    className="cursor-not-allowed btn w-full mt-3 bg-emerald-300 text-lg text-white font-bold"
                                >
                                    Enroll
                                </button>
                            </div>
                            :

                            <div className="w-full">
                                <button
                                    onClick={enrollHandle}
                                    disabled={availableSeat === 0 && true}
                                    className="btn w-full mt-3 hover:bg-emerald-400  bg-emerald-300 text-lg text-white font-bold"
                                >
                                    {availableSeat === 0 ? 'No seats left' : 'Enroll'}
                                </button>
                            </div>


                }

                {
                    !user && <p className='text-red-700 flex items-center gap-1'><BiSolidError /> You need to login to enroll the course</p>
                }

            </div>
        </div>
    );
};

export default Details;