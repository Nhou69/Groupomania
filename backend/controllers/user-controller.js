const user = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Créer un compte utilisateur
exports.signupUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const User = new user({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash,
                //isAdmin: false
            });
            User.save()
                .then(() => res.status(201).json({message: 'Utilisateur crée !'}))
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};

// Se connecter à un compte utilisateur
exports.loginUser = (req, res, next) => {
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

//suppression de l'utilisateur
exports.deleteUser = (req, res, next) => {
    user.destroy({ where: { id: req.params.id }})
        .then(() => res.status(200).json({ message: 'Utilisateur supprimé !'}))
        .catch(error => res.status(400).json({ error }))
};