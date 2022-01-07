import React, {useState} from 'react';
import axios from 'axios';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = (e) => {
        e.preventDefault();
        const msgError = document.querySelector('.error');

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
            if(res){
                window.location ="/home";
            }
        })
        .catch((error) => {
            if(error) {
                msgError.innerHTML = 'Votre adresse mail ou votre mot de passe est incorrect';
            }
        });
    };

    return (
        <form action="" onSubmit={handleLogin} id="sign-up-form">
            <label htmlFor="email">Email</label>
            <br/>
            <input type="text" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
            <br/><br/>
            <label htmlFor="password">Mot de passe</label>
            <br/>
            <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
            <br/>
            <br/>
            <div className="error"></div>
            <input type="submit" value="Se connecter"/>
            <br/>
        </form>
    );
};

export default SignInForm;