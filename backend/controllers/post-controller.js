const post = require('../models/post-model');
const user = require('../models/user-model');

// Créer un post
exports.newPost = (req, res, next) => {
    const newPost = new post ({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    user_id: req.body.user_id
    });
    newPost.save()
        .then(() => res.status(201).json({message: 'Nouveau post crée !'}))
        .catch(error => res.status(400).json({error}));
};