//imports express into a router variable
const router = require('express').Router();
//imports the joined models
const { User, Post, Comment } = require('../models/index');

router.get('/post', async (req, res) => {
    try {
        const postsData = await Post.findAll({
            attributes: [
                'id',
                'title',
                'content'
            ],
            include: [{model: User, attributes:['username']}]
        })
        const posts = postsData.map((post) => post.get({ plain: true })
        );
        req.session.save(() => {
            // We set up a session variable to count the number of times we visit the homepage
            if (req.session.countVisit) {
              // If the 'countVisit' session variable already exists, increment it by 1
              req.session.countVisit++;
            } else {
              // If the 'countVisit' session variable doesn't exist, set it to 1
              req.session.countVisit = 1;
            }
              });
              res.render('form', {
                posts,
                // We send over the current 'countVisit' session variable to be rendered
                countVisit: req.session.countVisit,
            });
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})

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
      const posts = postsData.map((post) => post.get({ plain: true })
      );
      req.session.save(() => {
          // We set up a session variable to count the number of times we visit the homepage
          if (req.session.countVisit) {
            // If the 'countVisit' session variable already exists, increment it by 1
            req.session.countVisit++;
          } else {
            // If the 'countVisit' session variable doesn't exist, set it to 1
            req.session.countVisit = 1;
          }
            });
            res.render('homepage', {
              posts,
              // We send over the current 'countVisit' session variable to be rendered
              countVisit: req.session.countVisit,
          });
  }catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
})
module.exports = router;