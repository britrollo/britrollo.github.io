import React from 'react';
import Company from './Company';
import career from '../../data/careerhistory';

const Career = () => {
        return (
            <div>
                {career.map((job) => (
                    <Company job={job} />
                ))}
            </div>
        )
};

export default Career;