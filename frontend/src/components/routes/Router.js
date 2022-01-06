import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/Login';
import Profil from '../../pages/Profil';
import Home from '../../pages/Home';

const navRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
};

export default navRoutes;