import routerx from 'express-promise-router';
import userController from '../controllers/UserController';

const router=routerx();

router.post('/v1/login', userController.login);

export default router;