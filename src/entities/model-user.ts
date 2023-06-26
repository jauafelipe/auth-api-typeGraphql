import mongoose, { Schema } from "mongoose";
import { User } from "../Interface/IuserSchema";

const schema: Schema = new Schema<User>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", schema);
