import React from 'react';
import education from '../../data/education';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(5),
  }));

const Education = () => {
    return (
        <div>
            <Stack spacing={3}>
            {education.map((edu, index) => (
                <StyledPaper elevation={4} square={false}>
                    <Typography variant='h5'>{edu.degree}</Typography>
                    <Typography variant='h6'>{edu.school}</Typography>
                    {edu.minor ? <Typography variant='subtitle'> Minor: {edu.minor}</Typography> : ""}
                    <Typography variant='body1'>{edu.start} - {edu.end}</Typography>
                    <Typography variant='body2'> <b>Relevant Coursework:</b> {edu.coursework}</Typography>
                    <Typography variant='body2'>{edu.honors}</Typography>
                </StyledPaper>
            ))}
            </Stack>
        </div>
    );
};

export default Education;