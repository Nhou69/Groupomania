const user = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Créer un compte utilisateur
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            user.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                image: null,
                password: hash,
                isAdmin: false
            })
                .then(() => res.status(201).json({message: 'Utilisateur crée !'}))
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};

// Se connecter à un compte utilisateur
exports.login = (req, res, next) => {
    user.findOne({ email: req.body.email })
        .then(user =>{
            if(!user){
                return res.status(401).json({message: 'Utilisateur non trouvé !'});
            }
            bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if(!valid){
                    return res.status(401).json({message: 'Mot de passe incorrect !'});
                }
                res.status(200).json({
                    userId: user._id,
                    token: jwt.sign(
                        {userId: user._id},
                        process.env.TOKEN,
                        {expiresIn: '24h'}
                    )
                });
            })
            .catch(error => res.status(500).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};