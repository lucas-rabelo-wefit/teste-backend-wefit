import type { SellerRepository } from "../../repositories/SellerRepository";
import type { SubmitFindByDocumentSellerServiceRequest } from "./types";

class FindByDocumentSellerService {
  constructor(
    private sellerRepository: SellerRepository,
  ) { }

  async execute(request: SubmitFindByDocumentSellerServiceRequest) {
    const { document } = request;

    const documentExist = await this.sellerRepository.findByDocument(document);

    if (!documentExist) {
      throw new Error('Documento não encontrado');
    }

    return documentExist;
  }
};

export { FindByDocumentSellerService };
