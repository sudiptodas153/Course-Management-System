// import React, { use } from 'react';
import Instructors from '../../Shared/Instructors/Instructors';
import Resources from '../../Shared/Resources/Resources';
import AboutUs from '../../Shared/AboutUs/AboutUs';
import { useEffect } from 'react';
// import Loader from '../../Shared/Loader/Loader';
// import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Community = () => {
    useEffect(() => { window.scrollTo(0, 0) }, [])
    return (
        <div className='max-w-11/12 mx-auto space-y-20 my-10'>
            <title>Community</title>
            <Instructors></Instructors>
            <Resources></Resources>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Community;