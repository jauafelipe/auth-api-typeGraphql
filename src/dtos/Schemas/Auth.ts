import { Field, ObjectType } from "type-graphql";
import { IAuth } from "../../Interface/IAuthChecker";
import { IUser } from "../../Interface/IUser";
import { User } from "./User.schemas";

@ObjectType({ description: "token do usuario" })
export class Auth implements IAuth {
  @Field({ nullable: false })
  token: string;
  @Field(() => User)
  user: IUser;
}
