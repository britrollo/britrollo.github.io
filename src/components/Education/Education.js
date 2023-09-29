import React from 'react';
import education from '../../data/education';


const Education = () => {
    return (
        <div>
            {education.map(edu => (
                <div>
                    <h4>{edu.degree}</h4>
                    {edu.minor ? <p> Minor: {edu.minor}</p> : ""}
                    <p>{edu.school}</p>
                    <p>{edu.start} - {edu.end}</p>
                </div>
            ))}
        </div>
    );
};

export default Education;