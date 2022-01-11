const Logout = () => {
    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split(".")[1]));
        } catch (e) {
            return null;
        }
    };

    const userLogout = () => {
        const decodedJwt = parseJwt(localStorage.getItem("token"));
        if (decodedJwt) {
            localStorage.removeItem("token")
        };
        window.location="/"
    };

    return (
        <li onClick={userLogout}>
            <img src="./img/icons/logout.svg" alt="déconnexion utilisateur"/>
        </li>
    );
};

export default Logout;