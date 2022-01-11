import { useState } from 'react';
import axios from 'axios';
import SignInForm from "./SignInForm";

const SignUpForm = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [controlPassword, setControlPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const firstnameError = document.querySelector(".firstname.error");
        const lastnameError = document.querySelector(".lastname.error");
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");
        const passwordConfirmError = document.querySelector(".password-confirm.error");

        firstnameError.innerHTML ="";
        lastnameError.innerHTML ="";
        emailError.innerHTML ="";
        passwordError.innerHTML = "";
        passwordConfirmError.innerHTML = "";
        
        if (firstname==="") {
            firstnameError.innerHTML ="le champs est vide";
        }
        if (lastname==="") {
            lastnameError.innerHTML ="le champs est vide";
        }
        if (email===""){
            emailError.innerHTML ="l'email est vide"
        }
        if (password==="") {
            passwordError.innerHTML ="Le mots de passe est vide";
        }
        if (controlPassword===""){
            return passwordConfirmError.innerHTML ="Le mots de passe de confirmation est vide"
        }
        if (password !== controlPassword) {
            return passwordConfirmError.innerHTML ="Les mots de passe ne correspondent pas";
        }

        if(firstname && lastname && email && password && controlPassword) {
            axios({
                method: "post",
                url: "http://localhost:3030/api/auth/signup",
                data: {
                    firstname,
                    lastname,
                    email,
                    password,
                },
            })
            .then((res) => {
                console.log(res);
                if (res) {
                    setFormSubmit(true);
                }
            })
            .catch((err) => console.log(err));
        };
    }

    return (
        <>
            { formSubmit ? (
                <>
                    <SignInForm />
                    <span></span>
                    <h4 className="success">Enregistrement réussi, veuillez-vous connecter</h4>
                </>
            ) : (
                <form action="" onSubmit={handleRegister} id="sign-up-form">
                    <label htmlFor="firstname">Prénom</label>
                    <br/>
                    <input type="text" name="firstname" id="firstname" onChange={(e)=> setFirstname(e.target.value)} value={firstname} />
                    <div className="firstname error"></div>
                    <br/>
                    <label htmlFor="lastname">Nom</label>
                    <br/>
                    <input type="text" name="lastname" id="lastname" onChange={(e)=> setLastname(e.target.value)} value={lastname}/>
                    <div className="lastname error"></div>
                    <br/>
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
                    <label htmlFor="password-conf">Confirmer le mot de passe</label>
                    <br/>
                    <input type="password" name="password" id="password-conf" onChange={(e)=> setControlPassword(e.target.value)} value={controlPassword}/>
                    <div className="password-confirm error"></div>
                    <br/>
                    <input type="submit" value="Valider inscription"/>
                </form>
            )};
        </>
    );
};

export default SignUpForm;