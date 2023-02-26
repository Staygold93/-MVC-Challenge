const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    username: 'Sal',
    password: bcrypt.hashSync('password12345', 8),
  },
  {
    username: 'Lernantino',
    password: bcrypt.hashSync('password12345', 8),
  },
  {
    username: 'Amiko',
    password: bcrypt.hashSync('password12345', 8),
  },
];

const seedUsers = async () =>
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;