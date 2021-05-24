import routerx from 'express-promise-router';
import playerRouter from './player';
import scriptRouter from './script';
import userRouter from './user';
const router=routerx();

router.use('/player',playerRouter);
router.use('/script',scriptRouter);
router.use('/user',userRouter);

export default router;