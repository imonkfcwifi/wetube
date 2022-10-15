import video from "../models/video";
// video.find({}, (error, videos) => {]

export const homepageVideos = async (req, res) => {
    // synchronous 상황을 해야 await 가능 cuz await은 문법상 funtion에서만 활용가능
    try {
        console.log("im zero");
        // video 찾기
        console.log("im first");
        const videos = await video.find({});
        // database 기다려주기
        console.log("im second");
        // render!
        return res.render("home", { pageTitle: "Home", videos: [] });

    }
    catch {
        console.log("something happend..!");
    }
    console.log("im last");
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

export const postUpload = (req, res) => {
    const { title } = req.body;
    videos.push(newVideo);
    return res.redirect("/");
};
