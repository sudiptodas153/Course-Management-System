import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { MdFacebook } from "react-icons/md";
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import image from '../../assets/lottie/logo.png'
const Footer = () => {
    const { user } = use(AuthContext)
    return (
        <div>
            <footer className="footer md:h-60 dark:bg-emerald-700 bg-emerald-100 sm:footer-horizontal text-base-content p-10">
                <aside>
                    <img className='w-28' src={image} alt="" />
                    <p>Crafting Skills that Matter. Shaping Futures with Purpose</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Explore</h6>
                    <Link to={'/course'}><p className="link link-hover">Courses</p></Link>
                    <Link to={'/community'}><p className="link link-hover">About Us</p></Link>
                    <Link to={'/addCourse'}> <p className="link link-hover">Add Course</p></Link>
                    <Link to={'/My-enrolled-courses'}><p className="link link-hover">My Enroll</p></Link>


                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <Link to={'/community'}><p className="link link-hover">Community</p></Link>
                    <Link to={!user && '/login'}><p className="link link-hover">Login</p></Link>
                    <div className='flex items-center gap-2'>
                        <a target='blank' href='https://www.facebook.com/sudipto.das.601834'><MdFacebook size={20} /></a>
                        <a target='blank' href='https://github.com/sudiptodas153'><IoLogoGithub size={20} /></a>
                        <a target='blank' href='https://www.linkedin.com/in/sudipto-das-677330343/'><IoLogoLinkedin size={20} /></a>

                    </div>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;