import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  name: { type: String, required: true },
  due_date: { type: String, required: true },
  complete: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true}
}, {
  timestamps: true
});

export default mongoose.model("Todo", TodoSchema);