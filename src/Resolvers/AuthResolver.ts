import { Arg, Mutation, Resolver } from "type-graphql";
import userSchema from "../entities/model-user";

import { InputUser } from "../dtos/Inputs/Create.user";
import { compare } from "bcryptjs";
import { Auth } from "../dtos/Schemas/Auth";
import AuthConfig from "../config/jwt";
import { sign } from "jsonwebtoken";
import { IAuthResolver } from "../Interface/IAuthChecker";

@Resolver(Auth)
class AuthResolver implements IAuthResolver {
  @Mutation(() => Auth)
  public async singIn(@Arg("datas") data: InputUser): Promise<unknown> {
    const { email, password } = data;
    console.log("usuario logado");
    const user = await userSchema.findOne({ email });
    if (!user) {
      throw new Error("incorrect email/password cobination");
    }
    const mathPasword = await compare(password, user.password);
    if (!mathPasword) {
      throw new Error("incorrect email/password cobination");
    }

    const { expiresIn, secret } = AuthConfig.jwt;
    const token: string = sign({}, secret, {
      subject: `"${user.id}"`,
      expiresIn,
    });
    return {
      user,
      token,
    };
  }
}

export { AuthResolver };
