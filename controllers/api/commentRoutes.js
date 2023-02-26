const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    await Comment.findAll().then((dbcommentData) => res.json(dbcommentData));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    if (req.session) {
      console.log('------POSTING COMMENT------');
      await Comment.create({
        comment_body: req.body.comment_body,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
      })
        .then((dbcommentData) => res.json(dbcommentData))
        .catch((err) => {
          console.log(err);
          res.status(400).json(err);
        });
    } else {
      res.status(400).json({ message: 'Not logged in!' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    await Comment.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbcommentData) => {
      if (!dbcommentData) {
        res
          .status(404)
          .json({ message: 'Cannot find a comment with this id!' });
        return;
      }
      res.json(dbcommentData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;