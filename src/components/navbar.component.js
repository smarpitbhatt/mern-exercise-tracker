import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="">
            <ul className="navbar-nav mr-auto">
            <Link className="navbar-brand" to="/">ExerciseTracker</Link>
            <Link className="nav-item nav-link" to="/">Exercises<span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link" to="/create">Create Exercises Log</Link>
            <Link className="nav-item nav-link" to="/user">Create User</Link>
            </ul>
        </div>
        </nav>  
        )      
    }

}