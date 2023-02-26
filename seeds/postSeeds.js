const { Post } = require('../models');

const postData = [
  {
    title: 'The best site to visit for beginner PC builders',
    body: "Go to PC Part Picker. You won't regret it.",
    user_id: 1,
  },

  {
    title: 'AMD or Intel?',
    body: "Intel is killing it with their 13th gen processors, and for the first time; they're more affordable as well!",
    user_id: 3,
  },

  {
    title: 'Ghost of Tsushima',
    body: "Can't wait for it to come on PC. Sony so far has been killing it with bringing their exclusives to PC!",
    user_id: 2,
  },

  {
    title: "Nvidia prices omg -_-'",
    body: 'I feel like Nvidia are living in their own world. Who in their right mind would pay $2000 for a graphics card. Intel is showing them upp with their Arc series',
    user_id: 1,
  },
];

const seedPosts = async () => await Post.bulkCreate(postData);
module.exports = seedPosts;