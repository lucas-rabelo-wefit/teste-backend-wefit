import type { SellerRepository } from "../../repositories/SellerRepository";
import type { SubmitFindByEmailSellerServiceRequest } from "./types";

class FindByEmailSellerService {
  constructor(
    private sellerRepository: SellerRepository,
  ) { }

  async execute(request: SubmitFindByEmailSellerServiceRequest) {
    const { email } = request;

    const emailExist = await this.sellerRepository.findByEmail(email);

    if (!emailExist) {
      throw new Error('E-mail não existe');
    }

    return emailExist;
  }
};

export { FindByEmailSellerService };
