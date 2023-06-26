import { Field, InputType } from "type-graphql";
import { IUserInput } from "../../Interface/IUser";
import { IsEmail, Length } from "class-validator";

@InputType({ description: "entrada de usuarios" })
class InputUser implements IUserInput {
  @Field(() => String)
  @Length(3, 60) //min/max
  public name: string;
  @Field(() => String)
  @IsEmail() //  is email?
  public email: string;
  @Field(() => String)
  public password: string;
}

export { InputUser };
