import React, { Component } from 'react';
import Company from "./Company.js";
import Skills from "./Skills.js"
// import { Redirect } from 'react-router-dom';

class Resume extends Component {
    // TODO: Get data
    render() {
        return (
            <div>
                <h1>Welcome to my Resume!</h1>
                <Company />
                <Skills />
            </div>
        )
    }
}

export default Resume;