import { PrismaSellerRepository } from "../../repositories/SellerRepository/prisma/PrismaSellerRepository";
import type { Request, Response } from "express";
import { FindByEmailSellerService } from "../../services";
import type { FindByEmailSellerRequest } from "./types";

class FindByEmailSellerController {
  async handle(request: Request, response: Response) {
    const { email } = request.body as FindByEmailSellerRequest;

    const prismaSellerRepository = new PrismaSellerRepository();
    const findByEmailSellerService = new FindByEmailSellerService(prismaSellerRepository);

    try {
      const emailExist = await findByEmailSellerService.execute({ email });

      console.log(emailExist);

      return response.status(200).json(emailExist);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { FindByEmailSellerController };
