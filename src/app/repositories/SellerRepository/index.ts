import type { SellerCreateDataProps, SellerProps } from "./types";

interface SellerRepository {
  create: (data: SellerCreateDataProps) => Promise<SellerProps>;
  findByEmail: (email: string) => Promise<SellerProps | null>;
}

export { SellerRepository };