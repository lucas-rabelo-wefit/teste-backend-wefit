import type { TypeDocument } from "../../repositories/SellerRepository/types";

interface SubmitCreateSellerServiceRequest {
  document: string;
  type_document: TypeDocument;
  name: string;
  telephone: string;
  email: string;
  address_code: string;
  address_street: string;
  address_number: number;
  address_complement?: string;
  address_city: string;
  address_neighborhood: string;
  address_state: string;
}

export { SubmitCreateSellerServiceRequest };
