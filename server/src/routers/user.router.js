const router = require('express').Router();
const User = require('../controllers/user.controller');
const authent = require('../middleware/authentication');
const authori = require('../middleware/authorization');

router.post('/', authent, authori, User.create);

router.post('/login/google', User.loginGoogle);

router.post('/login/admin', User.loginAdmin);

router.get('/', authent, authori, User.read);

router.get('/:id', authent, authori, User.findId);

module.exports = router;   