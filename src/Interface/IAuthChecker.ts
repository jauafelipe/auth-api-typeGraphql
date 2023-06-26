import { InputUser } from "../dtos/Inputs/Create.user";
import { IUser } from "./IUser";

export interface IAuthResolver {
  singIn(datas: InputUser): Promise<unknown>;
}
export interface IAuthChekcer {
  token?: string;
}

export interface IAuth {
  token: string;
  user: IUser;
}
