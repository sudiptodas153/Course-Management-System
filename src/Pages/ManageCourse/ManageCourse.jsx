import React, { useEffect } from 'react';
import ManageCourseWithEmail from '../../Shared/ManageCourseWithEmail/ManageCourseWithEmail';

const ManageCourse = () => {
useEffect(() => { window.scrollTo(0, 0) }, [])
    return (
        <div>
            <title>Manage Course</title>
            <ManageCourseWithEmail></ManageCourseWithEmail>
        </div>
    );
};

export default ManageCourse;