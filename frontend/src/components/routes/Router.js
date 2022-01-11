import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/Login';
import Profil from '../../pages/Profil';
import Home from '../../pages/Home';
import Navbar from '../NavBar';

const navRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
};

export default navRoutes;