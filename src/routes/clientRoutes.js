import { Router } from 'express';
import clientController from '../controllers/ClientController';

const router = new Router();

router.get('/', clientController.index);

export default router;
