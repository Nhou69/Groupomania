import { useState } from 'react'
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const Log = () => {
    const [ signUpModal, setSignUpModal] = useState(true);
    const [ signInModal, setSignInModal] = useState(false);

    //Cette fonction permet de switcher sur s'insrire ou se connecter au clique
    const handleModals = (e) => {
        if (e.target.id === "register"){
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setSignInModal(true);
            setSignUpModal(false);
        }
    }

    //Code visible côté UI
    return (
        <div className="connection-form">
            <div className="form-container">
                <ul>
                    <li onClick={handleModals} id="register" className={signUpModal ? "active-btn" : null}>S'inscrire</li>
                    <li onClick={handleModals} id="login" className={signInModal ? "active-btn" : null}>Se connecter</li>
                </ul>
                {signUpModal && <SignUpForm />}
                {signInModal && <SignInForm />}
            </div>
        </div>
    );
};

export default Log;