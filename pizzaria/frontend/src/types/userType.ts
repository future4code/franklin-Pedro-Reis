export interface UserType {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  password: string;
  cep: string;
  street: string;
  number: string;
  district: string;
  reference: string;
}

export type UserContextType = {
  user: UserType[];
  saveUser: (user: UserType) => void;
};
