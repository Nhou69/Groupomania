const comment = require('../models/comment-model');
const user = require('../models/user-model');

// Créer un commentaire
exports.newComment = (req, res, next) => {
    const newComment = new comment ({
    content: req.body.content,
    user_id: req.body.user_id,
    post_id: req.body.post_id
    });
    newComment.save()
        .then(() => res.status(201).json({message: 'Nouveau commentaire crée !'}))
        .catch(error => res.status(400).json({error}));
};

//afficher un seul commentaire
exports.getOneComment = (req, res, next) => {
    comment.findOne({ where: { id: req.params.id } })
        .then(comment => res.status(200).json(comment))
        .catch(error => res.status(400).json({error}));
};

//afficher tous les commentaire d'un post
exports.getAllComment = (req, res, next) => {
    comment.findAll({where: {post_id: req.params.post_id}})
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(400).json({error}));
};

//modification du contenu d'un commentaire
exports.modifyComment = (req, res, next) => {
    comment.update({ content: req.body.content }, { where: { id: req.params.id }})
        .then(()=> res.status(200).json({message : 'commentaire modifié !'}))
        .catch((error)=> res.status(400).json({error}));
};

//suppression d'un commentaire
exports.deleteComment = (req, res, next) => {
    comment.destroy({ where: { id: req.params.id }})
        .then(() => res.status(200).json({ message: 'Commentaire supprimé !'}))
        .catch(error => res.status(400).json({ error }))
};