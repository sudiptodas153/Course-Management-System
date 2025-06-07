import React, { useState } from 'react';
import logPic from '../../assets/lottie/login.json'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Lottie from 'lottie-react';

const Login = () => {

    const [eye, setEye] = useState(false);

    return (
         <div className='md:flex items-center justify-center p-3'>
           <div className='border border-gray-300 rounded-lg p-7 md:p-10'>
            <h2 className='text-center font-bold mb-5 text-3xl'>LoginHere</h2>
            <div className='md:flex md:gap-12 md:items-center '>
                 
                <div>
                   
                    <Lottie className='w-60' animationData={logPic} loop={true}></Lottie>
                </div>
                <div>
                    <div className="bg-base-100">
                        <div className="">
                            <form>
                               
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Enter your Email</legend>
                                    <input md:w-72 type="text" className="input md:w-72" placeholder="Type your email" />
                                </fieldset>
                                <fieldset className="relative fieldset">
                                    <legend className="fieldset-legend">Enter your Password</legend>
                                    <input md:w-72 type={`${eye ? 'text' : 'password'}`} className="input md:w-72 " placeholder="Type your password" />
                                    <p>Forget password?</p>
                                    <div onClick={()=>setEye(!eye)} className='cursor-pointer absolute mt-4 ml-64'>
                                        {
                                            eye ? <AiOutlineEyeInvisible size={20}/> :  <AiOutlineEye size={20}/>
                                        }
                                        
                                    </div>
                                   
                                </fieldset>
                               
                                <button className='btn bg-emerald-300 text-white font-bold w-full'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Login;