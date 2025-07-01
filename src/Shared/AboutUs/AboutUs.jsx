import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const AboutUs = () => {
      const { loading } = use(AuthContext)
  return (
   
      <div>
         {loading ? <h2></h2> :
    <section className="rounded-lg px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold dark:text-white text-gray-900 mb-6">
          About Us
        </h2>
        <p className="text-lg dark:text-white text-gray-500 ">
          Welcome to <span className="font-semibold text-indigo-600">SkillForge</span> — your ultimate destination to discover, enroll, and grow through expertly crafted online courses.
        </p>
        <p className="text-lg dark:text-white text-gray-500 ">
          Our mission is to empower learners worldwide by providing a seamless, secure, and engaging learning experience.
        </p>
        <p className="text-lg dark:text-white text-gray-500 ">
          Whether you're looking to upgrade your skills or explore new passions, our curated courses, powered by modern technologies like JWT authentication and MongoDB, ensure your journey is safe, personalized, and efficient.
        </p>
        <p className="text-lg dark:text-white text-gray-500 ">
          Join our community of learners and start shaping your future today!
        </p>

      </div>
    </section>
    }
    </div>
    
  );
};

export default AboutUs;
