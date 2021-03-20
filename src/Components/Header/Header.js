import React, { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login1/firebase.config'
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser([]);
        }).catch((error) => {
            console.log(error.message);
        });
    }
    return (
        <div className='m-5 header-container'>
            <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {loggedInUser.isSigned && <h3>{loggedInUser.name}</h3>}
                        <Link class="nav-item nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                        <Link class="nav-item nav-link" to="/destination">Destination</Link>
                        <Link class="nav-item nav-link" to="/blog">Blog</Link>
                        <Link class="nav-item nav-link " to="/contact">Contact</Link>
                        {loggedInUser.isSigned ? <Link to='/'><button onClick={handleSignOut} className='nav-item nav-link button btn'>Sign Out</button></Link> : <Link to='/signin'><button className='nav-item nav-link button btn'>Login</button></Link>}

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;