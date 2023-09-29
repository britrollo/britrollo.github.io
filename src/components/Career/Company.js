import React from 'react';
import Experience from './Experience';
import Period from './Period';

const Company = (props) => {
    const { job } = props;
    return (
        <div>
            <h2>{job.company}</h2>
            <Period timePeriod={job.period} />
            {job.Experience.map(role => (
                 <Experience role={role} />
            ))}
        </div>
    );
}

export default Company;