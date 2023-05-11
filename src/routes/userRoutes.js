import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.post('/', userController.store); // TBR
// router.get('/', userController.index); // TBR

router.get('/:id', userController.show);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
