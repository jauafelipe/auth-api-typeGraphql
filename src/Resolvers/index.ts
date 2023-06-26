import { AuthResolver } from "./AuthResolver";
import { ResolverUser } from "./SessionResolver";

const resolvers = [AuthResolver, ResolverUser] as const;

export { resolvers };
