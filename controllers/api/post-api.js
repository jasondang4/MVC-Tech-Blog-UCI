const router = require('express').Router();
const { User, Post, Comment } = require('../../models/index');


router.get('/', async (req, res) => {
  try {
    const postsData = await Post.findAll({
        attributes: [
            'id',
            'title',
            'content'
        ],
        include: [{model: User, attributes:['username']}]
    })
    const posts = postsData.map((post) => post.get({ plain: true }));
    res.json(posts)
}catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.post('/', async (req, res) => {
  try {
    console.log('test')
    const postData = await Post.create({
      title: req.body.post_title,
      content: req.body.post_content,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;