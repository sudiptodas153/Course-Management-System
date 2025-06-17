import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-600 ">
          Welcome to <span className="font-semibold text-indigo-600">SkillForge</span> — your ultimate destination to discover, enroll, and grow through expertly crafted online courses.
        </p>
        <p className="text-lg text-gray-600 ">
          Our mission is to empower learners worldwide by providing a seamless, secure, and engaging learning experience.
        </p>
        <p className="text-lg text-gray-600 ">
          Whether you're looking to upgrade your skills or explore new passions, our curated courses, powered by modern technologies like JWT authentication and MongoDB, ensure your journey is safe, personalized, and efficient.
        </p>
        <p className="text-lg text-gray-600 ">
          Join our community of learners and start shaping your future today!
        </p>

      </div>
    </section>
  );
};

export default AboutUs;
