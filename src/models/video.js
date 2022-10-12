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

const video = mongoose.model("Video", videoSchema);

export default video;