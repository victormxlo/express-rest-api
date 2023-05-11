import { Router } from 'express';
import clientController from '../controllers/ClientController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', clientController.index);
router.post('/', loginRequired, clientController.store);
router.get('/:id', clientController.show);
router.put('/:id', loginRequired, clientController.update);
router.delete('/:id', loginRequired, clientController.delete);

export default router;
