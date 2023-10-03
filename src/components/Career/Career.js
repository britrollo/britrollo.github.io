import React from 'react';

import Timeline from '@mui/lab/Timeline';
import {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';

import Company from './Company';
import career from '../../data/careerhistory';

const Career = () => {
        return (
            <Timeline 
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                    },
                }}
            >
                {career.map((job) => (
                    <Company job={job} />
                ))}
            </Timeline>
        )
};

export default Career;