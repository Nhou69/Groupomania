import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Log/Logout'


const Navbar = () => {
    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split(".")[1]));
        } catch (e) {
            return false;
        }
    };
    let username =null;

    const getNameUser = (userToken) => {
        const decodedJwt = parseJwt(localStorage.getItem("token"));
        if (decodedJwt!=null){
            //window.location="/";
            username = decodedJwt.firstname;
        } else {
            console.log(decodedJwt.firstname)
            username = decodedJwt.firstname;
        }
    }
    const decodedJwt = parseJwt(localStorage.getItem("token"));
    
    console.log(decodedJwt)
    //console.log(decodedJwt.firstname)
    username= decodedJwt.firstname
    console.log(username)

    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <NavLink to="/home">
                        <div className="logo">
                            <img src="icon.svg" alt="icon"/>
                            <h3>Groupomania</h3>
                        </div>
                    </NavLink>
                </div>
                {username ? (
                    <ul>
                        <li></li>
                        <NavLink to="/profil">
                            <li className="welcome"> hello {username}</li>
                        </NavLink>
                        <Logout />
                    </ul>
                ) : (
                    <ul>
                        <li></li>
                        <li>
                        <NavLink to="/">
                            <img src="./img/icons/login.svg" alt="login"/>
                        </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;