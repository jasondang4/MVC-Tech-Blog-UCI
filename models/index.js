//imports all the models
const User = require ('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//connects the user_id to the post they make
Post.hasOne(User, {
    foreignKey: 'user_id'
});
User.belongsTo(Post, {
    foreignKey: 'user_id'
})

//connects the user id to the comment they make
Comment.hasOne(User, {
    foreignKey: 'user_id'
});
User.belongsTo(Comment, {
    foreignKey: 'user_id'
})

//exports the newly joined models
module.exports = {User, Post, Comment};