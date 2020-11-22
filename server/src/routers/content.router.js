const router = require('express').Router();
const Content = require('../controllers/content.controller');
const authent = require('../middleware/authentication');

router.post('/', authent, Content.create);

router.put('/:id', authent, Content.update);

router.delete('/:id', authent, Content.delete);

router.get('/', authent, Content.readAll);

router.get('/myStory', authent, Content.readByUser);

router.get('/detail/:id', authent, Content.detail);

module.exports = router;
