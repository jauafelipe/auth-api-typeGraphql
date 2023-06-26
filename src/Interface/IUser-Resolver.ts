import { InputUser } from "../dtos/Inputs/Create.user";
import { User } from "./IuserSchema";

export interface IUserResolver {
  create(data: InputUser): Promise<User>;
  allDatas(): Promise<any>;
}
