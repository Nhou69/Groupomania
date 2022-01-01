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

//afficher un seul post
exports.getOnePost = (req, res, next) => {
    post.findOne({ where: { id: req.params.id } })
        .then(post => res.status(200).json(post))
        .catch(error => res.status(400).json({error}));
};

//afficher tous les posts
exports.getAllPost = (req, res, next) => {
    post.findAll()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({error}));
};

//modification d'un post
exports.modifyPost = (req, res, next) => {
    const postObject = {
        ...req.body
    };
    post.update(postObject, { where: { id: req.params.id }})
        .then(()=> res.status(200).json({message : 'Post modifié !'}))
        .catch((error)=> res.status(400).json({error}));
};