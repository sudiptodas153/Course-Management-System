import React, { useEffect } from 'react';
import Banner from '../../Shared/Banner/Banner';
import Courses from '../../Shared/Courses/Courses';
import { useLoaderData } from 'react-router';
import PopularCourses from '../../Shared/PopularCourses/PopularCourses';
import EnrolledStudent from '../../Shared/EnrolledStudent/EnrolledStudent';
import UpcomingCourse from '../../Shared/UpcomingCourse/UpcomingCourse';

const Home = () => {
    const data = useLoaderData();

    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <div className='space-y-20 my-10'>
            <title>Home</title>
            <Banner></Banner>
            <Courses data={data}></Courses>
            <PopularCourses data={data}></PopularCourses>
            <UpcomingCourse></UpcomingCourse>
            <EnrolledStudent></EnrolledStudent>
        </div>
    );
};

export default Home;