import { AuthChecker } from "type-graphql";
import { IAuthChekcer } from "../Interface/IAuthChecker";
import { verify } from "jsonwebtoken";
import AuthConfig from "../config/jwt";
const authentication: AuthChecker<IAuthChekcer> = ({ context }): boolean => {
  const authHeader = context.token;
  if (!authHeader) {
    return false;
  }
  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, AuthConfig.jwt.secret);
    return !!decoded;
  } catch (e) {
    return false;
  }
};

export { authentication };
