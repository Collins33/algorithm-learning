import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render(){
        return(
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
            </ul>
        )
    }

}
export default Navigation;