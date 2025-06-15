import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Courses from '../../Shared/Courses/Courses';
import { useLoaderData } from 'react-router';
import PopularCourses from '../../Shared/PopularCourses/PopularCourses';
import EnrolledStudent from '../../Shared/EnrolledStudent/EnrolledStudent';
import UpcomingCourse from '../../Shared/UpcomingCourse/UpcomingCourse';

const Home = () => {
    const data = useLoaderData();


    return (
        <div className=''>
            <Banner></Banner>
            <Courses data={data}></Courses>
            <PopularCourses data={data}></PopularCourses>
            <UpcomingCourse></UpcomingCourse>
            <EnrolledStudent></EnrolledStudent>
        </div>
    );
};

export default Home;