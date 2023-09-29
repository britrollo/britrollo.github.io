import React from 'react';

const Skills = (props) => {
    const { skillList } = props;
    return (
        <div>
        {skillList.map(skill => (
            <li>{skill}</li>
        ))}
        </div>
    );
};

export default Skills;