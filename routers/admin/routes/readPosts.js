import mongoose from "mongoose";
import PostSchema from "../../../models/PostSchema.js";

export default function readPosts(req, res) {
  const Post = mongoose.model("posts", PostSchema);

  Post.find().lean().sort({ date: 'desc' })
    .then((post) => {
      res.render('admin/posts', { posts });
    })
    .catch((err) => {
      req.flash('error_msg', "Erro ao carregar as postagens");
      res.redirect('/admin');
      console.error(err);
    });
}