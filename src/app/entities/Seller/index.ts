import { randomUUID } from "crypto";
import type { Replace } from "../../utils/Replace";
import type { SellerProps, TypeDocument } from "./types";
import { TYPE_DOCUMENT } from "../../repositories/SellerRepository/constants";

class Seller {
  private _id: string;
  private props: SellerProps;

  constructor(props: Replace<SellerProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();

    const hasDocumentValid = this.validateDocument(props.type_document, props.document);

    if (!hasDocumentValid) {
      throw new Error('Documento inválido!');
    }

    const hasEmailValid = this.validateEmail(props.email);

    if (!hasEmailValid) {
      throw new Error('E-mail inválido!');
    }

    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.createdAt ? new Date() : undefined,
    };
  }

  public get id() {
    return this._id;
  }

  public get type_document() {
    return this.props.type_document;
  }

  public set type_document(type: TypeDocument) {
    this.props.type_document = type;
  }

  private validateDocument(type: TypeDocument, document: string) {
    if (type === TYPE_DOCUMENT.PF) {
      return document.length === 11;
    }

    if (type === TYPE_DOCUMENT.PJ) {
      return document.length === 14;
    }

    return false;
  }

  public get document() {
    return this.props.document;
  }

  public set document(document: string) {
    this.props.document = document;
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get telephone() {
    return this.props.telephone;
  }

  public set telephone(telephone: string) {
    this.props.telephone = telephone;
  }

  public get email() {
    return this.props.email;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  private validateEmail(email: string) {
    return email.split("@").length === 2 && email.split("@")[1].length > 0;
  }

  public get address_code() {
    return this.props.address_code;
  }

  public set address_code(address_code: string) {
    this.props.address_code = address_code;
  }

  public get address_street() {
    return this.props.address_street;
  }

  public set address_street(address_street: string) {
    this.props.address_street = address_street;
  }

  public get address_number() {
    return this.props.address_number;
  }

  public set address_number(address_number: number) {
    this.props.address_number = address_number;
  }

  public get address_complement(): string | undefined {
    return this.props.address_complement ?? undefined;
  }

  public set address_complement(address_complement: string) {
    this.props.address_complement = address_complement;
  }

  public get address_neighborhood() {
    return this.props.address_neighborhood;
  }

  public set address_neighborhood(address_neighborhood: string) {
    this.props.address_neighborhood = address_neighborhood;
  }

  public get address_state() {
    return this.props.address_state;
  }

  public set address_state(address_state: string) {
    this.props.address_state = address_state;
  }

  public get address_city() {
    return this.props.address_city;
  }

  public set address_city(address_city: string) {
    this.props.address_city = address_city;
  }

  public get createdAt(): Date | null | undefined {
    return this.props.createdAt;
  }

  public get updatedAt(): Date | null | undefined {
    return this.props.updatedAt;
  }

  public get getProps() {
    return this.props;
  }
}

export { Seller };