import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export type authenticationData = {
  id: string;
};

export default class Authenticator {
  generateToken = (payload: authenticationData) => {
    return jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: "5h",
    });
  };

  getTokenData = (token: string) => {
    const tokenData = jwt.verify(token, process.env.JWT_KEY as string);
    return tokenData;
  };
}
