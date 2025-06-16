import type { TYPE_DOCUMENT } from "./constants";

type TypeDocument = keyof typeof TYPE_DOCUMENT;

interface SellerProps {
  id: string;
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
  createdAt: Date;
  updatedAt?: Date;
}

type SellerCreateDataProps = Omit<SellerProps, "id" | "createdAt" | "updatedAt">;

export { SellerProps, SellerCreateDataProps, TypeDocument };