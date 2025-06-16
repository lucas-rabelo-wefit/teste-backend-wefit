import { PrismaSellerRepository } from "../../repositories/SellerRepository/prisma/PrismaSellerRepository";
import type { Request, Response } from "express";
import { FindByDocumentSellerService } from "../../services";
import type { FindByDocumentSellerRequest } from "./types";

class FindByDocumentSellerController {
  async handle(request: Request, response: Response) {
    const { document } = request.body as FindByDocumentSellerRequest;

    const prismaSellerRepository = new PrismaSellerRepository();
    const findByDocumentSellerService = new FindByDocumentSellerService(prismaSellerRepository);

    try {
      const documentExist = await findByDocumentSellerService.execute({ document });

      return response.status(200).json(documentExist);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { FindByDocumentSellerController };
