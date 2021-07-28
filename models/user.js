import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    // select: false makes it so that this never sends back the password in a query
    password_digest: { type: String, required: true, select: false },
  },
  {
    timestamps: true
  }
);

export default mongoose.model("User", UserSchema);