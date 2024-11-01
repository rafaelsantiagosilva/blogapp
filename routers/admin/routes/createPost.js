import mongoose from "mongoose";
import PostSchema from "../../../models/PostSchema.js";

export default function createPost(req, res) {
  const errors = [];

  if (!req.body.title || typeof (req.body.title) === undefined || req.body.title == null)
    errors.push({ text: "Título inválido" });

  if (!req.body.slug || typeof (req.body.slug) === undefined || req.body.slug == null)
    errors.push({ text: "Slug inválido" });

  if (!req.body.description || typeof (req.body.description) === undefined || req.body.description == null)
    errors.push({ text: "Descrição inválida" });

  if (!req.body.content || typeof (req.body.content) === undefined || req.body.content == null)
    errors.push({ text: "Conteúdo inválido" });

  if (!req.body.category || typeof (req.body.category) === undefined || req.body.category == null)
    errors.push({ text: "Categoria indefinida" });

  if (errors.length > 0) {
    res.render('admin/add-posts', { errors });
    return;
  }

  const Post = new mongoose.model("posts", PostSchema);

  const newPost = new Post({
    title: req.body.title,
    slug: req.body.slug,
    description: req.body.description,
    content: req.body.content,
    category: req.body.category,
  });

  newPost.save()
    .then(() => {
      req.flash('success_msg', 'Postagem criada com sucesso!');
      res.redirect('/admin/posts');
    })
    .catch((err) => {
      req.flash('error_msg', 'Erro ao criar postagem');
      console.error(err);
    });
}