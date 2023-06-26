import { MiddlewareFn, NextFn } from "type-graphql";
import userSchema from "../entities/model-user";
import { isEmail } from "class-validator";
import { User } from "../Interface/IuserSchema";

const verifyDatas: MiddlewareFn = async (
  { context, args },
  next
): Promise<NextFn> => {
  const { name, email, password } = args.datas as User;
  const datas = await userSchema.findOne({ name, email });
  if (datas) {
    throw new Error("dados ja existem");
  }
  if (!name && !email) {
    throw new Error("Porfavor Inserir Dados");
  }
  if (name.length < 3 && name.length > 60) {
    throw new Error("tamanho minimo de 3 e maximo de 60");
  }
  if (password.length <= 7) {
    throw new Error("A senha deve ter no minimo 8 caracteres");
  }
  if (!isEmail(email)) {
    throw new Error("email fornecido é invalido");
  }

  return next();
};

export { verifyDatas };
