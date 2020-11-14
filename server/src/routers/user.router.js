const router = require('express').Router();
import User from '../controllers/user.controller';
import authent from '../middleware/authentication';
import authori from '../middleware/authorization';

router.post('/', User.create);

router.post('/login/manual', User.loginManual);

router.get('/', authent, User.read);

router.get('/:id', authent, authori, User.findId)

router.put('/:id', authent, authori, User.update);

export default router;