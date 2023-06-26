import { Arg, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import userSchema from "../entities/model-user";
import { InputUser } from "../dtos/Inputs/Create.user";
import { User } from "../dtos/Schemas/User.schemas";
import { hash } from "bcryptjs";
import { IUserResolver } from "../Interface/IUser-Resolver";
import { verifyDatas } from "../Middleware/verification-datas";
import { validateOrReject } from "class-validator";

@Resolver(User)
class ResolverUser implements IUserResolver {
  @UseMiddleware(verifyDatas)
  @Mutation(() => User)
  public async create(@Arg("datas") data: InputUser) {
    await validateOrReject(data);
    const { name, email, password } = data;
    const hashPassword = await hash(password, 12);
    const user = await userSchema.create({
      name,
      email,
      password: hashPassword,
    });
    return user.toObject() as User;
  }
  @Query(() => [User])
  public async allDatas(): Promise<any> {
    const allUsers = await userSchema.find();
    return allUsers;
  }
}

export { ResolverUser };
