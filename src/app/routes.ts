import { Router } from 'express';
import {
  CreateSellerController,
  FindByDocumentSellerController,
  FindByEmailSellerController
} from './controllers';

const router = Router();

router.get('/seller/find-by-email', new FindByEmailSellerController().handle);
router.get('/seller/find-by-document', new FindByDocumentSellerController().handle);
router.post('/seller/create', new CreateSellerController().handle);

export { router };
