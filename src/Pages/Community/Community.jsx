// import React, { use } from 'react';
import Instructors from '../../Shared/Instructors/Instructors';
import Resources from '../../Shared/Resources/Resources';
import AboutUs from '../../Shared/AboutUs/AboutUs';
// import Loader from '../../Shared/Loader/Loader';
// import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Community = () => {
    
    return (
        <div className='max-w-11/12 mx-auto'>
            <title>Community</title>
            <Instructors></Instructors>
            <Resources></Resources>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Community;