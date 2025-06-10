import React, { use, useState } from 'react';
import logPic from '../../assets/lottie/login.json'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Lottie from 'lottie-react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

    const { signInUser, logInByFacebook, logInByGoogle, } = use(AuthContext)
    const [eye, setEye] = useState(false);
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;


        signInUser(email, password)
            .then(() => {
                toast.success('Login successful')
                navigate('/')
            })
            .catch(() => {

            })
    }

    // login by google

    const handleGoogle = () => {
        logInByGoogle()
            .then(() => {
                toast.success('Login successful')
                navigate('/')
            })
            .catch(() => { })
    }

    // login by fb

    const handleFB = () => {
        logInByFacebook()
            .then(() => {
                toast.success('Login successful')
                navigate('/')
            })
            .catch(() => { })
    }

    return (
        <div className='md:flex items-center justify-center p-3'>
            <ToastContainer></ToastContainer>
            <div className='border border-gray-300 rounded-lg p-7 md:p-10'>
                <h2 className='text-center font-bold mb-5 text-3xl'>Login Here</h2>
                <div className='md:flex md:gap-12 md:items-center '>

                    <div>

                        <Lottie className='w-60' animationData={logPic} loop={true}></Lottie>
                    </div>
                    <div>
                        <div className="bg-base-100">
                            <div className="">
                                <form onSubmit={handleLogin}>

                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Enter your Email</legend>
                                        <input type="text" name='email' className="input md:w-72" placeholder="Type your email" />
                                    </fieldset>
                                    <fieldset className="relative fieldset">
                                        <legend className="fieldset-legend">Enter your Password</legend>
                                        <input name='password' type={`${eye ? 'text' : 'password'}`} className="input md:w-72 " placeholder="Type your password" />
                                        <p>Forget password?</p>
                                        <div onClick={() => setEye(!eye)} className='cursor-pointer absolute mt-4 ml-64'>
                                            {
                                                eye ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />
                                            }

                                        </div>

                                    </fieldset>

                                    <button className='btn bg-emerald-300 text-white font-bold w-full'>Login</button>
                                    <div className='text-xs flex gap-1 mt-2'>Don't have an account? <Link to={'/register'}><p className='text-blue-500'>Register</p></Link></div>
                                </form>

                                <div className='text-center my-2'>
                                    <h2> Or,</h2>
                                </div>
                                <div>
                                    <button onClick={handleGoogle} className="btn w-full bg-white text-black border-[#e5e5e5]">
                                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                        Login with Google
                                    </button>
                                </div>

                                <div className='mt-2'>
                                    <button onClick={handleFB} className="btn w-full bg-[#1A77F2] text-white border-[#005fd8]">
                                        <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                                        Login with Facebook
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;