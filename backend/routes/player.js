import routerx from 'express-promise-router';
import playerController from '../controllers/PlayerController';
import auth from '../middlewares/auth';

const router=routerx();

router.post('/v1/team', auth.verify, playerController.team);
router.get('/v1/players', auth.verify, playerController.players);

export default router;