import * as jwt from "jsonwebtoken";

export const token = jwt.sign({ id: "abcd" }, "fruta", { expiresIn: "24h" });
export const tokenData = jwt.verify(token, "bananinha");

export const userData = (data: string) => {
  return data;
};

export const generateToken = jwt.sign({ id: "abcd" }, "fruta", {
  expiresIn: "24h",
});

export type authenticationData = { id: string };

// export const generateToken = (id: authenticationData) => {
//   return jwt.sign(id, String(process.env.JWT_KEY), {
//     expiresIn: "24h",
//   });
// };

export const getTokenData = (token: string): authenticationData | null => {
  try {
    const { id } = jwt.verify(
      token,
      String(process.env.JWT_KEY)
    ) as authenticationData;
    return { id };
  } catch (e) {
    return null;
  }
};
