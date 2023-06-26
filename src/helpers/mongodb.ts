import mongoose, { MongooseOptions } from "mongoose";

export async function createConnection() {
  const url: string = process.env.DATABASE || "";
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as MongooseOptions)
    .then(() => console.log("conectado"))
    .catch((e) => console.log(e));
}
