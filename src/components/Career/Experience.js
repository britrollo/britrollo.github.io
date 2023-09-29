import React from 'react';


const Experience = (props) => {
    const { role } = props;
    console.log(role);
    const industry = role.industry ? (" - " + role.industry) : ""
    return (
        <div>
            <h4>{role.title} {industry}</h4>
            <ul>
                {role.accomplishments.map(point => (
                    <li>{point}</li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;