const router = require('express').Router();

const postRoute = require('./posts-api');

router.use('/posts', postRoute);

module.exports = router;