import { Router } from 'express';
import { CreateSellerController, FindByEmailSellerController } from './controllers';

const router = Router();

router.get('/seller/find-by-email', new FindByEmailSellerController().handle);
router.post('/seller/create', new CreateSellerController().handle);

export { router };
