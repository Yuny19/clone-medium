const router = require('express').Router();
const Content = require('../controllers/content.controller');
const authent = require('../middleware/authentication');

router.post('/', Content.create);

router.get('/', Content.readAll);

router.get('/myStory', authent, Content.readByUser);

router.get('/detail/:id', Content.detail);

module.exports = router;
