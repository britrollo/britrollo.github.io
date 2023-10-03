import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';


const Experience = (props) => {
    const { role } = props;
    console.log(role);
    const industry = role.industry ? (" - " + role.industry) : ""
    return (
        <Card> 
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">{role.title} {industry}</Typography>
            <ul>
                {role.accomplishments.map(point => (
                    <li>{point}</li>
                ))}
            </ul>
            </CardContent>
        </Card>
    );
};

export default Experience;