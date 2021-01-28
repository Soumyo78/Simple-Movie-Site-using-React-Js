import './style.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component{

    render(){
        return(
            <nav className="main-nav-container">
                <NavLink to={'/'} exact activeStyle={{backgroundColor:"green"}}>Home</NavLink>
                <NavLink to={'/action'} exact activeStyle={{backgroundColor:"green"}}>Action</NavLink>
                <NavLink to={'/horror'} exact activeStyle={{backgroundColor:"green"}}>Horror</NavLink>
                <NavLink to={'/documentary'} exact activeStyle={{backgroundColor:"green"}}>Documentary</NavLink>
                <NavLink to={'/about'} exact activeStyle={{backgroundColor:"green"}}>About</NavLink>
            </nav>
        );
    }
}

export default Navbar;