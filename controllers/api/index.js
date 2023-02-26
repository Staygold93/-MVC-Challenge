const router = require('express').Router();

const userroutes = require('./userroutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userroutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;