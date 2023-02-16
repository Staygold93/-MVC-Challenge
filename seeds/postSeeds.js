const { Post } = require("../models");

const postdata = [
  {
    title: "What to do when you get stuck?",
    body: "First things first... step aweay from your computer for 5-10min",
    user_id: 3,
  },
  {
    title: "Best places to figure out your code",
    body: "Google Google Google! Can be your best friend and worst enemy. The important thing to master is, how to search for your problem.",
    user_id: 2,
  },
  {
    title: "How to ace your next interview!",
    body: "Confidence is key!! But also dont be arogant!",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;