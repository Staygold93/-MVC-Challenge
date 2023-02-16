const { User } = require("../models");
const bcrypt = require("bcrypt");

const userdata = [
  {
    username: "aziza",
    password: bcrypt.hashSync("password123", 8),
  },
  {
    username: "bongani",
    password: bcrypt.hashSync("password213", 8),
  },
  {
    username: "cecile",
    password: bcrypt.hashSync("password312", 8),
  },
  {
    username: "donnavon",
    password: bcrypt.hashSync("password321", 8),
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;