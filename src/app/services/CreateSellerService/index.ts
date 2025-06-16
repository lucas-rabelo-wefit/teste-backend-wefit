import type { SellerRepository } from "../../repositories/SellerRepository";
import type { SellerProps } from "../../repositories/SellerRepository/types";
import { emailValidation } from "../../utils/emailValidation";
import type { SubmitCreateSellerServiceRequest } from "./types";

class CreateSellerService {
  constructor(
    private sellerRepository: SellerRepository,
  ) { }

  async execute(request: SubmitCreateSellerServiceRequest): Promise<SellerProps> {
    const seller = request;

    const emailIsValid = emailValidation(seller.email);
    if (!emailIsValid) {
      throw new Error('E-mail incorreto!');
    }

    const emailExits = await this.sellerRepository.findByEmail(seller.email);

    if (emailExits) {
      throw new Error('E-mail já existente');
    }

    return await this.sellerRepository.create(seller);
  }
};

export { CreateSellerService };
