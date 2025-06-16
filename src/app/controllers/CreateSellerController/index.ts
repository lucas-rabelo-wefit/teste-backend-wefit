import type { Request, Response } from 'express';
import { PrismaSellerRepository } from '../../repositories/SellerRepository/prisma/PrismaSellerRepository';
import type { SellerCreateDataProps } from '../../repositories/SellerRepository/types';
import { CreateSellerService } from '../../services';

class CreateSellerController {
  async handle(request: Request, response: Response) {
    const sellerRequestBody = request.body as SellerCreateDataProps;

    const prismaSellerRepository = new PrismaSellerRepository();
    const createSellerService = new CreateSellerService(prismaSellerRepository);

    try {
      const sellerCreated = await createSellerService.execute(sellerRequestBody);
  
      return response.status(201).json(sellerCreated);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  };
};

export { CreateSellerController };
