import { Seller } from "../../entities/Seller";
import type { SellerProps } from "../../entities/Seller/types";
import type { SellerRepository } from "../../repositories/SellerRepository";
import type { SubmitCreateSellerServiceRequest } from "./types";

class CreateSellerService {
  constructor(
    private sellerRepository: SellerRepository,
  ) { }

  async execute(request: SubmitCreateSellerServiceRequest): Promise<SellerProps> {
    const sellerRequest = request;

    const seller = new Seller({ ...sellerRequest });

    const emailExits = await this.sellerRepository.findByEmail(seller.email);

    if (emailExits) {
      throw new Error('E-mail já existente');
    }

    const documentExits = await this.sellerRepository.findByDocument(seller.document);

    if (documentExits) {
      throw new Error('Documento já existente');
    }

    return await this.sellerRepository.create(seller);
  }
};

export { CreateSellerService };
