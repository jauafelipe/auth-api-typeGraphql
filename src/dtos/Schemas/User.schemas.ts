import { Field, ObjectType } from "type-graphql";
import { IUser } from "../../Interface/IUser";

@ObjectType({ description: "class model do usuario" })
export class User implements IUser {
  @Field()
  public name: string;
  @Field()
  public email: string;
  @Field()
  public password: string;
}
