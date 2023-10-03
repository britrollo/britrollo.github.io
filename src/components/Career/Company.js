import React from 'react';

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';


import Experience from './Experience';
import Period from './Period';

const Company = (props) => {
    const { job } = props;
    return (
        <div>
            {job.Experience.map((role, index) => (
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        {index < 1 ?
                            <div>
                                <Typography gutterBottom variant="h5" component="div"> {job.company}</Typography>
                                <Period timePeriod={job.period} />
                            </div>
                            : ""}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Experience role={role} />
                    </TimelineContent>
                </TimelineItem>
            ))}

        </div>
    );
}

export default Company;