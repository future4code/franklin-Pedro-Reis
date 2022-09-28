import User, { UserDB } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "pizzaria_cliente";
  public toUserDbModel = (user: User) => {
    const newUser: UserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      whatsapp: user.getWhatsapp(),
      password: user.getPassword(),
      cep: user.getCep(),
      street: user.getStreet(),
      number: user.getNumber(),
      district: user.getDistrict(),
      reference: user.getReference(),
      role: user.getRole(),
    };
    return newUser;
  };
  public createUser = async (user: User) => {
    const newUser = this.toUserDbModel(user);
    await BaseDatabase.connections(UserDatabase.TABLE_USERS).insert(newUser);
  };
}
