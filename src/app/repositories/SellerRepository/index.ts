import type { Seller } from "../../entities/Seller";
import type { SellerProps } from "../../entities/Seller/types";

abstract class SellerRepository {
  create: (data: Seller) => Promise<SellerProps>;
  findByEmail: (email: Seller["email"]) => Promise<SellerProps | null>;
  findByDocument: (document: Seller["document"]) => Promise<SellerProps | null>;
}

export { SellerRepository };