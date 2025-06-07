import React, { useState } from 'react';
import regPic from '../../assets/lottie/registration.json'
import Lottie from 'lottie-react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Register = () => {

const [eye, setEye] = useState(false);
const [eye2, setEye2] = useState(false);


    return (
        <div className='md:flex items-center justify-center p-3'>
           <div className='border border-gray-300 rounded-lg p-7 md:p-4'>
            <h2 className='text-center font-bold mb-5 text-3xl'>Register Here</h2>
            <div className='md:flex md:items-center '>
                 
                <div>
                   
                    <Lottie className='w-60 md:w-[430px]' animationData={regPic} loop={true}></Lottie>
                </div>
                <div>
                    <div className="bg-base-100">
                        <div className="">
                            <form>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Your Name:</legend>
                                    <input md:w-72 type="text" className="input md:w-72" placeholder="Type your name" />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Your PhotoURL</legend>
                                    <input md:w-72 type="text" className="input md:w-72" placeholder="https:/example.jpg/6fg5e" />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Your Email</legend>
                                    <input md:w-72 type="text" className="input md:w-72" placeholder="Type your email" />
                                </fieldset>
                                <fieldset className="relative fieldset">
                                    <legend className="fieldset-legend">Password</legend>
                                    <input md:w-72 type={`${eye ? 'text' : 'password'}`} className="input md:w-72 " placeholder="Set your password" />
                                    <div onClick={()=>setEye(!eye)} className='cursor-pointer absolute mt-4 ml-64'>
                                        {
                                            eye ? <AiOutlineEyeInvisible size={20}/> :  <AiOutlineEye size={20}/>
                                        }
                                        
                                    </div>
                                   
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Confirm Password</legend>
                                    <input md:w-72  type={`${eye2 ? 'text' : 'password'}`} className="input md:w-72" placeholder="Confirm password" />
                                     <div onClick={()=>setEye2(!eye2)} className='cursor-pointer absolute mt-4 ml-64'>
                                        {
                                            eye2 ? <AiOutlineEyeInvisible size={20}/> :  <AiOutlineEye size={20}/>
                                        }
                                        
                                    </div>
                                </fieldset>
                                <button className='btn bg-emerald-300 text-white font-bold w-full'>Register</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Register;