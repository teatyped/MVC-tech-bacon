
//importing the User.js model and exporting an object with it as a property

// took out vote// remove vote from other files **

const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// create associations

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: "CASCADE"
});

module.exports = { User, Post, Comment };