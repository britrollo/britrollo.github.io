import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/resume/">Resume</Link>
                    </li>
                    <li>
                        <Link to="/education/">Education</Link>
                    </li>
                    <li>
                        <Link to="/skills/">Skills</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;