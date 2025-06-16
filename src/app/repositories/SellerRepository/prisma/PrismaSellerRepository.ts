import prisma from "../../../prisma";
import type { SellerRepository } from "..";
import { TYPE_DOCUMENT } from "../constants";
import type { Seller } from "../../../entities/Seller";
import type { SellerProps } from "../../../entities/Seller/types";

class PrismaSellerRepository implements SellerRepository {
  async create(data: Seller): Promise<SellerProps> {
    const seller = await prisma.seller.create({ data: data.getProps });

    const typeDocument = TYPE_DOCUMENT[seller.type_document] as keyof typeof TYPE_DOCUMENT;

    return {
      ...seller,
      type_document: typeDocument,
      updatedAt: seller.updatedAt ?? undefined,
      address_neighborhood: seller.address_neighborhood ?? undefined,
      address_complement: seller.address_complement ?? undefined,
    }
  }

  async findByEmail(email: string): Promise<SellerProps | null> {
    const seller = await prisma.seller.findUnique({
      where: {
        email,
      }
    });

    if(seller) {
      const typeDocument = TYPE_DOCUMENT[seller?.type_document] as keyof typeof TYPE_DOCUMENT;
  
      return {
        ...seller,
        type_document: typeDocument,
        updatedAt: seller.updatedAt ?? undefined,
        address_neighborhood: seller.address_neighborhood ?? undefined,
        address_complement: seller.address_complement ?? undefined,
      };
    } else {
      return null;
    }

  }
  async findByDocument(document: string): Promise<SellerProps | null> {
    const seller = await prisma.seller.findUnique({
      where: {
        document,
      }
    });

    if(seller) {
      const typeDocument = TYPE_DOCUMENT[seller?.type_document] as keyof typeof TYPE_DOCUMENT;
  
      return {
        ...seller,
        type_document: typeDocument,
        updatedAt: seller.updatedAt ?? undefined,
        address_neighborhood: seller.address_neighborhood ?? undefined,
        address_complement: seller.address_complement ?? undefined,
      };
    } else {
      return null;
    }
  }
}

export { PrismaSellerRepository };
