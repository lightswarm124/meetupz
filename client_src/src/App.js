import React from 'react';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';

const App = () => (
    <div>
        <NavBar />
        <div className="container">
            <Main />
        </div>
        <div className="fixed-action-btn">
            <Link to="/meetups/add" className="btn-floating btn-large red">
                <i className="fa fa-plus"></i>
            </Link>
        </div>
    </div>
)

export default App;
