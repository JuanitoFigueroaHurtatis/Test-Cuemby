import routerx from 'express-promise-router';
import scriptController from '../controllers/ScriptController';
import auth from '../middlewares/auth';

const router=routerx();

router.get('/consume', auth.verify, scriptController.api);

export default router;