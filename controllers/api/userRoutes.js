const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log('-----CREATING USER-----');
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      console.log('------USER CREATED-----');
      res.json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', (req, res) => {
  User.findOne({
          where: {
              username: req.body.username
          }
      }).then(dbUserData => {
          if (!dbUserData) {
              res.status(400).json({ message: 'No user with that username!' });
              return;
          }
          const validPassword = dbUserData.checkPassword(req.body.password);

          if (!validPassword) {
              res.status(400).json({ message: 'Incorrect password!' });
              return;
          }
          req.session.save(() => {

              req.session.user_id = dbUserData.id;
              req.session.username = dbUserData.username;
              req.session.loggedIn = true;

              res.json({ user: dbUserData, message: 'You are now logged in!' });
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});





router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({ where: { id: req.params.id } });
    if (!userData) {
      res.status(404).json('User Not Found');
    }
    res.status(200).json('Succesfully Deleted!');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;