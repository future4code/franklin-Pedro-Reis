export enum UserRole {
  NORMAL = "normal",
  ADMIN = "admin",
}

export interface SingUpInputTypes {
  name: string;
  email: string;
  whatsapp: string;
  password: string;
  cep: string;
  street: string;
  district: string;
  number: string;
  reference: string;
  role: UserRole;
}
