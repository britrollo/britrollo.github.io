import React from 'react';


const Period = (props) => {
    const { timePeriod } = props;
    const end = timePeriod.hasOwnProperty("end") ? timePeriod.end : "Present";
    return (
        <div>
            <p>{timePeriod.start} - {end}</p>
        </div>
    );
};

export default Period;