import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchemaSync } from "type-graphql";
import path from "node:path";
import { GraphQLSchema } from "graphql";
import { resolvers } from "./Resolvers";
import { authentication } from "./Middleware/Auth.middleware";
import { createConnection } from "./helpers/mongodb";
export async function bootStrap(): Promise<void> {
  const schema: GraphQLSchema = buildSchemaSync({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    authChecker: authentication,
  });
  await createConnection();
  const server: ApolloServer = new ApolloServer({ schema, cors: true });
  const { url } = await server.listen();
  console.log(url);
}
bootStrap();
