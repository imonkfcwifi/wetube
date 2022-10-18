import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    descriptiom: { type: String, required: true },
    createdAt: { type: Date, require: true, default: Date.now },
    hashtags: [{ type: String }],
    meta: {
        views: { type: Number, default: 0, required: true },
        rating: { type: Number, default: 0, required: true },

    },
});

const dideo = mongoose.model("video", videoSchema);

export default dideo;