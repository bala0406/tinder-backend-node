import mongoose from "mongoose";

const CardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
});

export default mongoose.model("cards", CardSchema);
