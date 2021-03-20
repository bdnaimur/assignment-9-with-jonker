import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config'
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Signup = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const googleSignin = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                user.isSigned = true;
                setUser(user);
                setLoggedInUser(user);
                if (loggedInUser) {
                    history.replace(from);
                }
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const facebookSignIn = () => {
        firebase.auth().signInWithPopup(facebookProvider)
            .then((result) => {
                const user = result.user;
                user.isSigned = true;
                setUser(user);
                setLoggedInUser(user);
                if (loggedInUser) {
                    history.replace(from);
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const hanldeCreateSubmit = (e) => {
        const { email, password } = user;        
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                user.isSigned = true;
                setUser(user);
                setLoggedInUser(user);
                if (loggedInUser) {
                    history.replace(from);
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        e.preventDefault();
        e.target.reset()
    }
    const hanldeSignInSubmit = (e) => {
        const { email, password } = user;
        firebase.auth().signInWithEmailAndPassword(email, password)            
            .then((userCredential) => {
                const user = userCredential.user;
                user.isSigned = true;
                setUser(user);
                console.log(user);
                setLoggedInUser(user);
                if (loggedInUser) {
                    history.replace(from);
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        e.preventDefault();
        e.target.reset()
    }
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            console.log('Sign-out successful');
            setUser([]);
            setLoggedInUser([]);
          }).catch((error) => {
            console.log(error.message);
          });
    }
    const handleBlur = (e) => {
        if (e.target.name === 'email') {
            const userSignInfo = { ...user };
            userSignInfo[e.target.name] = e.target.value;
            setUser(userSignInfo);
            setLoggedInUser(userSignInfo);
        }
        if (e.target.name === 'password') {
            const userSignInfo = { ...user };
            userSignInfo[e.target.name] = e.target.value;
            setUser(userSignInfo);
            setLoggedInUser(userSignInfo);
        }
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h2 >Sign Up Here</h2>
            <p>Email: {user.isSigned && user.email}</p>
            <button className='btn btn-success' onClick={googleSignin}><FontAwesomeIcon className='text-light' icon={["fab", "google"]} /> Sign in with Google</button>
            <button className='btn btn-primary' onClick={facebookSignIn}><FontAwesomeIcon className='text-light' icon={["fab", "facebook"]} /> Sign in with FaceBook</button>
            <br />
            <br />
            <h3>Secutrity System by 007</h3>
            <br />
            <h4>Create User</h4>
            <form onSubmit={hanldeCreateSubmit} className='container'>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="text" onBlur={handleBlur} name='firstName' class="form-control" id="" placeholder="First Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" onBlur={handleBlur} name='lastName' class="form-control" id="" placeholder="Last Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <input type="email" onBlur={handleBlur} name='email' class="form-control" id="" placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                        <input type="password" onBlur={handleBlur} name='password' class="form-control" id="" placeholder="Password" />
                    </div>
                </div>
                <input className='btn btn-primary' type="submit" value="Sign Up" />
            </form>
            <br/>
            <br/>
            <h4>Sign In User</h4>
            <form onSubmit={hanldeSignInSubmit} className='container'>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="email" onBlur={handleBlur} name='email' class="form-control" id="" placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                        <input type="password" onBlur={handleBlur} name='password' class="form-control" id="" placeholder="Password" />
                    </div>
                </div>
                <input className='btn btn-primary' type="submit" value="Sign In" />
                {/* <button className='btn btn-danger' onClick={handleSignOut}>Sign Out</button> */}
            </form>
        </div>
    );
};

export default Signup;