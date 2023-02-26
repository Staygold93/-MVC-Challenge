const { Comment } = require('../models');

const commentData = [
  {
    comment_body:
      'Dude pc part picker is a life-saver. It shows you whether everything is compatible; and where to get the best deals!',
    user_id: 2,
    post_id: 1,
  },

  {
    comment_body:
      "Intel really stepped up their game this year. They're also killing it with their affordable and competitive Arc graphics lineup.",
    user_id: 1,
    post_id: 2,
  },

  {
    comment_body:
      'Both God of War and Spider-Man were amazing. Sony are smart. Now I wantr to get a PS5 just to play God of War: Ragnarok :/',
    user_id: 3,
    post_id: 3,
  },

  {
    comment_body:
      "Its the crypto miners man. They're causing tech prices to shoot up big time :( #StruggleLife",
    user_id: 2,
    post_id: 4,
  },
];

const seedComments = async () => await Comment.bulkCreate(commentData);
module.exports = seedComments;