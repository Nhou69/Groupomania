import React from 'react';
import { useNavigate } from "react-router-dom";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const CheckToken = (props) => {
    const navigate = useNavigate();
    navigate('/')
    props.history.listen(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        if (token) {
            const decodedJwt = parseJwt(token);
        }
    });
};

export default CheckToken;