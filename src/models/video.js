import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: String,
    descriptiom: String,
    createdAt: Date,
    hashtags: [{ type: String }],
    meta: {
        views: Number,
        rating: Number,

    },
});

const dideo = mongoose.model("video", videoSchema);

export default dideo;