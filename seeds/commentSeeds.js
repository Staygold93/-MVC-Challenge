const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "This is great!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "So helpful!!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Thank you for sharing!",
    user_id: 3,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;