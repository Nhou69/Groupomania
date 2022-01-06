import React, {useState} from 'react';
import axios from 'axios';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error')

        axios({
            method: "post",
            url: 'http://localhost:3030/api/auth/login',
            //withCredentials: true,
            data: {
                email,
                password,
            }
        })
        .then((res) => {
            console.log(res);
            if(res.data.errors) {
                emailError.innerHTML = res.data.status;
                passwordError.innerHTML = res.data.status;
            } else {
                window.location = '/home';
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <form action="" onSubmit={handleLogin} id="sign-up-form">
            <label htmlFor="email">Email</label>
            <br/>
            <input type="text" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
            <div className="email error"></div>
            <br/>
            <label htmlFor="password">Mot de passe</label>
            <br/>
            <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
            <div className="password error"></div>
            <br/>
            <input type="submit" value="Se connecter"/>
            <br/>
        </form>
    );
};

export default SignInForm;