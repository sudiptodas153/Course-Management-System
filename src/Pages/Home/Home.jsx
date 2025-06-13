import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Courses from '../../Shared/Courses/Courses';
import { useLoaderData } from 'react-router';
import PopularCourses from '../../Shared/PopularCourses/PopularCourses';

const Home = () => {
    const data = useLoaderData();


    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Courses data={data}></Courses>
            <PopularCourses data={data}></PopularCourses>
        </div>
    );
};

export default Home;