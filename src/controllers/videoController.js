import dideo from "../models/video";
// video.find({}, (error, videos) => {]

export const homepageVideos = async (req, res) => {
    // synchronous 상황을 해야 await 가능 cuz await은 문법상 funtion에서만 활용가능
    const videos = await dideo.find({});
    return res.render("home", { pageTitle: "Home", videos });
}

export const watch = (req, res) => {
    const { id } = req.params;
    return res.render("watch", { pageTitle: `Watch` });
}
export const getEdit = (req, res) => {
    const { id } = req.params;
    return res.render("edit", { pageTitle: `Edit` });
}

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    console.log(req.body.title);
    return res.redirect(`/videos/${id}`);
}

export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" })
}

export const postUpload = async (req, res) => {
    const { title, hashtags, description } = req.body;
    await dideo.create({
        title,
        description,
        createdAt: Date.now(),
        hashtags: hashtags.split(",").map(word => `#${word}`),
        meta: {
            views: 0,
            rating: 0,
        }
    });

    return res.redirect("/");
};
