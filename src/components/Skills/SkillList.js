import React, { Component } from 'react';
import Skills from "./Skills";
import skills from "../../data/skills";

class SkillList extends Component {
    render() {
        return (
            <div class="skills">
                <ul>
                    {skills.map( (skillGroup) => 
                        <div class="skillscontainer">
                            <li>{skillGroup.category}</li>
                            <ul>
                                <Skills skillList={skillGroup.items}/>
                            </ul>
                        </div>)}
                </ul>
            </div>
        )
    }
}

export default SkillList;