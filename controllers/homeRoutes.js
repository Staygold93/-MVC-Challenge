const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// get all posts for homepage
router.get("/", async (req, res) => {
  try {
    // we need to get all Posts and include the User for each (change lines 8 and 9)
    const postData = await Post.findAll({
      attributes: ["id", "body", "title", "created_at"],
      order: [["created_at", "DESC"]],
      include: [
        {
          model: Comment,
          attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("allPosts", {
      layout: "main",
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get("/post/:id", async (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "body", "created_at"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      const post = dbPostData.get({ plain: true });
      res.render("single-post", { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;