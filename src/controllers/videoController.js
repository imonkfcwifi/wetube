let videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2min ago",
        views: 59,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 2,
        createdAt: "2min ago",
        views: 59,
        id: 2,
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 2,
        createdAt: "2min ago",
        views: 59,
        id: 3,
    },
];


export const homepageVideos = (req, res) => { return res.render("home", { pageTitle: "Home", videos }) }


export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1]
    // const id = req.params.id 와 같음.
    return res.render("watch", { pageTitle: `Watch : ${video.title}`, video });
}
export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1]
    return res.render("edit", { pageTitle: `Edit : ${video.title}`, video });
}



export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    console.log(req.body.title);
    videos[id - 1].title = title;
    // const title = req.body.title;
    return res.redirect(`/videos/${id}`);
}
//  use ` => ` without ` { } ` you get an automatic `return`
export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" })

}
export const postUpload = (req, res) => {
    const { title } = req.body;
    const newVideo = {
        title,
        rating: 0,
        comments: 2,
        createdAt: "just now",
        views: 0,
        id: videos.length + 1,
    };
    videos.push(newVideo);
    return res.redirect("/");

};
